import React, { useCallback } from 'react';

import { UiButton } from '@uireact/button';
import { UiCard } from '@uireact/card';
import { DefaultTheme, TextSize, Theme, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiView, UiViewRow } from '@uireact/view';
import { UiHeading, UiLink, UiText } from '@uireact/text';

import { ColorationForm, FontsForm, HeadingsForm, TextsForm, SpacingForm } from './form-sections';

export const CreateTheme: React.FC = () => {
  const [$customTheme, set$customTheme] = React.useState<Theme>(DefaultTheme);
  const [selectedTheme, setSelectedTheme] = React.useState<ThemeColor>(ThemeColor.light);
  const [themeVisible, setThemeVisible] = React.useState(false);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      setThemeVisible(true);
      e.preventDefault();
    },
    [$customTheme]
  );

  const handleChange = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const keys = e.currentTarget.name.split('-');

      if (keys[2]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        $customTheme[keys[0]][keys[1]][keys[2]] = e.currentTarget.value;
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        $customTheme[keys[0]][keys[1]] = e.currentTarget.value;
      }

      set$customTheme({ ...$customTheme });
    },
    [$customTheme, set$customTheme]
  );

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(JSON.stringify($customTheme, null, 4)).then(() => {
      alert('Theme copied!');
    });
  }, [$customTheme]);

  const toogleTheme = useCallback(() => {
    setSelectedTheme(selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light);
  }, [setSelectedTheme, selectedTheme]);

  return (
    <UiView theme={DefaultTheme} selectedTheme={selectedTheme}>
      <UiSpacing padding={{ all: 'five' }}>
        <UiButton onClick={toogleTheme} fullWidth>
          <UiSpacing padding={{ block: 'five' }}>
            <UiText>✨ Toogle coloration ✨</UiText>
          </UiSpacing>
        </UiButton>
      </UiSpacing>
      <UiViewRow weight="10">
        <form onSubmit={handleSubmit}>
          <>
            <UiGrid cols={{ small: 1, medium: 4, large: 10, xlarge: 10 }}>
              <UiGridItem cols={10}>
                <UiSpacing margin={{ all: 'four' }}>
                  <UiCard weight="200">
                    <UiHeading>Colorations</UiHeading>
                    <UiText>
                      For a detailed explanation on each coloration usage and tips, you should check{' '}
                      <UiLink href="./create-theme#colorations-" category="secondary">
                        this doc
                      </UiLink>
                      .
                    </UiText>
                  </UiCard>
                </UiSpacing>
                <ColorationForm type="light" coloration={$customTheme.light} handleChange={handleChange} />
                <ColorationForm type="dark" coloration={$customTheme.dark} handleChange={handleChange} />
              </UiGridItem>
              <UiGridItem cols={10}>
                <UiSpacing margin={{ all: 'four' }}>
                  <UiCard weight="200">
                    <UiHeading>Sizes</UiHeading>
                  </UiCard>
                </UiSpacing>
                <UiSpacing margin={{ all: 'four' }}>
                  <UiGrid cols={2} colsGap={10}>
                    <HeadingsForm
                      headings={$customTheme.sizes.headings}
                      handleChange={handleChange}
                      name="sizes-headings"
                    />
                    <TextsForm texts={$customTheme.sizes.texts} handleChange={handleChange} name="sizes-texts" />
                  </UiGrid>
                </UiSpacing>
              </UiGridItem>
              <UiGridItem cols={10}>
                <FontsForm texts={$customTheme.texts} handleChange={handleChange} name="texts" />
              </UiGridItem>
              <UiGridItem cols={10}>
                <SpacingForm spacing={$customTheme.spacing} handleChange={handleChange} name="spacing" />
              </UiGridItem>
            </UiGrid>
            <UiSpacing padding={{ all: 'four' }}>
              <UiButton type="submit" fullWidth theme="positive">
                <UiSpacing margin={{ block: 'four' }}>
                  <UiText size={TextSize.xlarge}>Generate theme</UiText>
                </UiSpacing>
              </UiButton>
            </UiSpacing>
          </>
        </form>
      </UiViewRow>
      {themeVisible && (
        <UiViewRow>
          <UiSpacing padding={{ all: 'four' }}>
            <UiText>
              <pre>{`${JSON.stringify($customTheme, null, 4)}`}</pre>
            </UiText>
          </UiSpacing>
          <UiSpacing padding={{ all: 'four' }}>
            <UiButton fullWidth onClick={copyToClipboard} theme="warning">
              <UiSpacing margin={{ all: 'four' }}>Copy to clipboard</UiSpacing>
            </UiButton>
          </UiSpacing>
        </UiViewRow>
      )}
    </UiView>
  );
};
