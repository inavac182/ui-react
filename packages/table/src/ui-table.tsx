'use client';
import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import { ColorCategory, UiReactElementProps } from '@uireact/foundation';
import { UiInput } from '@uireact/form';
import { UiIcon } from '@uireact/icons';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

import { UiTableData } from './types';
import { Table, TableHeadingCol, TableRow, TableCol, getFilteredData, getSortedData } from './private';

export type UiTableProps = {
  /** The data object that will be rendered in the table */
  data: UiTableData;
  /** The theme category that will be applied to the styling */
  category?: ColorCategory;
  /** Flag to disable the filter bar */
  withFilter?: boolean;
  /** Flag to disable the sort header */
  withSort?: boolean;
  /** Flag for positioning the filter bar */
  filterBoxPosition?: 'left' | 'right';
  /** The id of the selected field */
  selected?: string;
  /** onClick CB to be executed when a row is selected */
  onClick?: (id: string | number) => void;
} & UiReactElementProps;

export const UiTable: React.FC<UiTableProps> = ({
  className,
  data,
  category = 'primary',
  testId,
  withFilter = true,
  withSort = true,
  filterBoxPosition,
  selected,
  onClick,
}: UiTableProps) => {
  const [_data, setPrivateData] = useState(data);
  const [sortedCol, setSortedCol] = useState<number | null>(null);
  const [sortedOrientation, setSortedOrientation] = useState<'UP' | 'DOWN'>('UP');
  const [filterPhrase, setFilterPhrase] = useState('');

  const onFilter = useCallback((e: FormEvent<HTMLInputElement>) => {
    const newFilterPhrase = e.currentTarget.value;
    setFilterPhrase(newFilterPhrase);
  }, [setFilterPhrase]);

  const onSort = useCallback((index: number) => {
    const isColAlreadySelected = index === sortedCol;

    if (isColAlreadySelected) {
      if (sortedOrientation === 'UP') {
        setSortedOrientation('DOWN');
        return;
      } else {
        setSortedOrientation('UP');
        setSortedCol(null);
        return;
      }
    }

    setSortedOrientation('UP');
    setSortedCol(index);
  }, [sortedCol, sortedOrientation]);

  const handleClick = useCallback(
    (id: string | number) => {
      onClick?.(id);
    },
    [onClick]
  );

  useEffect(() => {
    const filteredItems = getFilteredData(data.items, filterPhrase);
    const sortedItems = getSortedData(filteredItems, sortedOrientation, sortedCol);
  
    setPrivateData({ ...data, items: sortedItems });
  }, [sortedCol, sortedOrientation, data, filterPhrase]);

  useEffect(() => {
    setPrivateData(data);
  }, [data]);

  return (
    <div>
      {withFilter && (
        <UiGrid cols={{ small: 1, medium: 2, large: 3, xlarge: 3 }}>
          <UiGridItem cols={!filterBoxPosition ? 3 : 1} startingCol={filterBoxPosition === 'right' ? 3 : 1}>
            <UiInput value={filterPhrase} onChange={onFilter} icon={<UiIcon icon="Search" />} category={category} />
          </UiGridItem>
        </UiGrid>
      )}
      <Table className={className} data-testid={testId} $category={category} cellSpacing="0">
        <thead>
          <tr>
            {_data.headings.map((heading, index) => (
              <TableHeadingCol key={`table-heading-${index}`} onClick={() => { onSort(index) }}>
                <UiFlexGrid>
                  <UiFlexGridItem grow={1}>
                    {heading}
                  </UiFlexGridItem>
                  {withSort && (
                    <UiFlexGridItem>
                      {sortedCol === index && sortedOrientation === 'UP' && <UiIcon icon="CaretUp" testId='sort-icon-up' />}
                      {sortedCol === index && sortedOrientation === 'DOWN' && <UiIcon icon="CaretDown" testId='sort-icon-down' />}
                      {sortedCol !== index && <UiIcon icon='Sort' testId='sort-icon' />}
                    </UiFlexGridItem>
                  )}
                </UiFlexGrid>
              </TableHeadingCol>
            ))}
          </tr>
        </thead>
        <tbody>
          {_data.items.map((field, rowIndex) => (
            <TableRow
              key={`table-item-index-${rowIndex}`}
              $hasClickHandler={onClick !== undefined}
              $isSelected={selected === field.id}
              $category={category}
              onClick={() => handleClick(field.id)}
            >
              {field.cols.map((text, index) => (
                <TableCol key={`table-item-${rowIndex}-colum-index-${index}`}>{text}</TableCol>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

UiTable.displayName = 'UiTable';
