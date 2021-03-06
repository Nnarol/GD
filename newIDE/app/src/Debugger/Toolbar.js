// @flow
import React, { PureComponent } from 'react';
import { translate, type TranslatorProps } from 'react-i18next';
import { ToolbarGroup } from 'material-ui/Toolbar';
import ToolbarIcon from '../UI/ToolbarIcon';
import ToolbarSeparator from '../UI/ToolbarSeparator';

type Props = {|
  onPlay: () => void,
  canPlay: boolean,
  onPause: () => void,
  canPause: boolean,
|} & TranslatorProps;

type State = {||};

export class Toolbar extends PureComponent<Props, State> {
  render() {
    const { t, onPlay, onPause, canPlay, canPause } = this.props;

    return (
      <ToolbarGroup lastChild>
        <ToolbarIcon
          onClick={onPlay}
          src="res/ribbon_default/preview32.png"
          disabled={!canPlay}
          tooltip={t('Play the game')}
        />
        <ToolbarSeparator />
        <ToolbarIcon
          onClick={onPause}
          src="res/ribbon_default/pause32.png"
          disabled={!canPause}
          tooltip={t('Pause the game')}
        />
      </ToolbarGroup>
    );
  }
}

export default translate()(Toolbar);
