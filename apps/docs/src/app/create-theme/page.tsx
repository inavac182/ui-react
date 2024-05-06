'use client';
import Link from "next/link";
import styled from "styled-components";
import { MotionProps, motion } from "framer-motion";

import { UiCard } from "@uireact/card";
import { UiFlexGrid } from "@uireact/flex";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiIcon } from "@uireact/icons";
import { UiList, UiListItem } from "@uireact/list";
import { UiLineSeparator } from "@uireact/separator";
import { UiText } from "@uireact/text";

import { PagesContainer } from "./components";

const StartLinkText = styled.span`
    a {
        color: var(--tertiary-token_100);
        font-size: 40px;
        max-width: 90%;
    }
`;

const LinkContent = styled(motion.div)`
    display: flex;
    align-items: center;
    border-bottom: 5px dotted var(--tertiary-token_100);
    position: relative;
    font-weight: bold;
`;

const IconWrapper = styled(motion.div)`
    height: var(--texts-xlarge);
    display: flex;
    font-size: 30px;
    position: absolute;
    box-sizing: border-box;
`;

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };
const listSpacing: UiSpacingProps['padding'] = {inline: 'five'};

const angleAnimation = {
    rest: {
        opacity: 0,
        left: '20%'
    },
    hovered: {
        opacity: 1,
        left: '95%',
        scale: 1.2
    }
}

const Heading = styled.h3`
    font-size: 44px;
    width: fit-content;
    background: -webkit-linear-gradient(45deg,  var(--fonts-token_100) 0%, var(--tertiary-token_100) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const animation: MotionProps = {
    whileInView: {
        rotate: [0, 360, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
        }
    }
}

export default function CreateThemeToolPage () {
    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiFlexGrid alignItems="center" gap="four">
                    <Heading>Create theme</Heading>
                    <motion.div {...animation}>
                        <UiIcon icon="SettingsBig" size="xlarge" category="tertiary" />
                    </motion.div>
                </UiFlexGrid>
                <br />
                <UiLineSeparator />
            </UiSpacing>
            <UiText size="large" fontStyle="bold">One of the most powerful aspects of this library is the hability to use your custom theme as a plug and play configuration.</UiText>
            <br />
            <UiText size="large">This tool will guide you go through the steps needed to create your theme.</UiText>
            <br />
            <UiCard category="primary" weight="150">
                <UiFlexGrid gap="four" alignItems="center">
                    <UiIcon icon="Info" category="tertiary" />
                    <UiText fontStyle="bold">A few points to keep in mind for your theme:</UiText>
                </UiFlexGrid>
                <br />
                <UiSpacing padding={listSpacing}>
                <UiList type="BULLETED">
                    <UiListItem>
                        <UiText>You will be setting up <UiText inline fontStyle="bold" category="tertiary">2 colorations</UiText> for your theme, <UiText inline fontStyle="bold" category="tertiary">dark and light</UiText></UiText>
                        <br />
                    </UiListItem>
                    <UiListItem>
                        <UiText>We suggest you follow the <UiText inline fontStyle="bold" category="tertiary">60-30-10 rule</UiText>.</UiText>
                        <br />
                        <UiSpacing padding={listSpacing}>
                            <UiList type="BULLETED">
                                <UiListItem>60% usage for primary color.</UiListItem>
                                <UiListItem>30% usage for secondary color.</UiListItem>
                                <UiListItem>10% usage for tertiary color.</UiListItem>
                            </UiList>
                        </UiSpacing>
                        <br />
                    </UiListItem>
                    <UiListItem>
                        <UiText>
                            The font name used in the theme <UiText inline fontStyle="bold" category="tertiary">only set it up in the CSS rules, it doesn't install it</UiText>. If you will use a font from the web e.g. google fonts, remember to add it to your page via {`<link />`} tag, CSS {`@import`}, etc...
                        </UiText>
                        <br />
                    </UiListItem>
                </UiList>
            </UiSpacing>
            </UiCard>
            <br />
            <StartLinkText>
                <Link href="./create-theme/colors/">
                    <LinkContent initial="rest" whileHover="hovered" whileTap={{ scale: 0.8 }}>
                        <span>
                            Start
                        </span>
                        <IconWrapper variants={angleAnimation}>
                            <UiIcon icon="AngleClearRight" category="tertiary" size="xlarge" />
                        </IconWrapper>
                    </LinkContent>
                </Link>
            </StartLinkText>
        </>
    )
}