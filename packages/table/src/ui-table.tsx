import React, { FormEvent, useCallback, useState } from 'react';

import styled from 'styled-components';

import {
  ColorCategory,
  ColorTokens,
  ThemeContext,
  UiReactElementProps,
  UiSpacing,
  UiSpacingProps,
  getColorCategory,
  getTextSizeFromSizeString,
  getThemeColor,
} from '@uireact/foundation';
import { UiInput } from '@uireact/form';
import { UiIcon } from '@uireact/icons';
import { UiGrid, UiGridItem } from '@uireact/grid';

import { UiTableData } from './types';
import { privateTableProps, privateTableRowProps } from './types/private-table-props';

export type UiTableProps = {
  data: UiTableData;
  category?: ColorCategory;
  withFilter?: boolean;
  filterBoxPosition?: 'left' | 'right';
  onClick?: (id: string) => void;
} & UiReactElementProps;

const Table = styled.table<privateTableProps>`
  width: 100%;
  th {
    ${(props) => `
    border: 0;
    margin: 0;
    border-bottom: 3px solid ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$category),
      ColorTokens.token_100
    )};
  `}
  }
`;

const TableHeadingCol = styled.th`
  text-align: center;
`;

const TableCol = styled.td`
  text-align: center;
`;

const TableRow = styled.tr<privateTableRowProps>`
  ${(props) => `
    ${
      props.$hasClickHandler
        ? `
            cursor: pointer;
            &:hover {
              background: ${getThemeColor(
                props.$customTheme,
                props.$selectedTheme,
                getColorCategory(props.$category),
                ColorTokens.token_100
              )};
              font-size: ${getTextSizeFromSizeString(props.$customTheme, 'large')};
            }
            transition: font-size .2s, background .2s;
          `
        : ''
    }
  `}
`;

const iconSpacing: UiSpacingProps['margin'] = { top: 'two', left: 'four' };

export const UiTable: React.FC<UiTableProps> = ({
  className,
  data,
  category = 'primary',
  testId,
  withFilter = true,
  filterBoxPosition,
  onClick,
}: UiTableProps) => {
  const theme = React.useContext(ThemeContext);
  const [_data, setPrivateData] = useState(data);
  const [filterPhrase, setFilterPhrase] = useState('');

  const onFilter = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const newFilterPhrase = e.currentTarget.value;
      setFilterPhrase(newFilterPhrase);

      const filteredData = data.items.filter(
        (field) => field.cols.filter((text) => text.includes(newFilterPhrase)).length > 0
      );

      setPrivateData({ ...data, items: filteredData });
    },
    [setFilterPhrase]
  );

  const handleClick = useCallback(
    (id: string) => {
      onClick?.(id);
    },
    [onClick]
  );

  return (
    <div>
      {withFilter && (
        <UiGrid cols={{ small: 1, medium: 2, large: 3, xlarge: 3 }}>
          <UiGridItem cols={!filterBoxPosition ? 3 : 1} startingCol={filterBoxPosition === 'right' ? 3 : 1}>
            <UiInput
              value={filterPhrase}
              onChange={onFilter}
              icon={
                <UiSpacing margin={iconSpacing}>
                  <UiIcon icon="MagnifyingGlass" />
                </UiSpacing>
              }
            />
          </UiGridItem>
        </UiGrid>
      )}
      <Table
        className={className}
        data-testid={testId}
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $category={category}
        cellSpacing="0"
      >
        <thead>
          <tr>
            {_data.headings.map((heading, index) => (
              <TableHeadingCol key={`table-heading-${index}`}>{heading}</TableHeadingCol>
            ))}
          </tr>
        </thead>
        <tbody>
          {_data.items.map((field, rowIndex) => (
            <TableRow
              key={`table-item-index-${rowIndex}`}
              $hasClickHandler={onClick !== undefined}
              $customTheme={theme.theme}
              $selectedTheme={theme.selectedTheme}
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
