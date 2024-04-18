import { UiHeading, UiText } from "@uireact/text"
import { UiTabItem, UiTabs } from '@uireact/tabs';

import { DemoCard } from "@/app/internal"
import { useCallback, useState } from "react";
import { UiCard } from "@uireact/card";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";

const tabContentSpacing: UiSpacingProps['padding'] = { all: 'five' };

export const Tabs = () => {
    const [selected, setSelected] = useState(1);
    const onSelect = useCallback((identifier: number) => {
        setSelected(identifier);
    }, [setSelected]);

    return (
        <DemoCard  shadow={false} spacing={{}}>
            <>
                <UiHeading>Tabs</UiHeading>
                <br /> 
                <UiCard noPadding>
                    <UiTabs>
                        <UiTabItem identifier={1} handleClick={onSelect} selected={selected === 1}>
                            <UiText>🍎</UiText>
                        </UiTabItem>
                        <UiTabItem identifier={2} handleClick={onSelect} selected={selected === 2}>
                            <UiText>🥦</UiText>
                        </UiTabItem>
                        <UiTabItem identifier={3} handleClick={onSelect} selected={selected === 3}>
                            <UiText>🥬</UiText>
                        </UiTabItem>
                    </UiTabs>
                    <UiSpacing padding={tabContentSpacing}>
                        <UiText>Selected {selected === 1 ? '🍎' : selected === 2 ? '🥦' : '🥬'}</UiText>
                    </UiSpacing>
                </UiCard>
            </>
        </DemoCard>
    )
}