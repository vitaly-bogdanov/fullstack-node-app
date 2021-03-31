import React, { FC, MouseEvent } from 'react';
import Button from '@material-ui/core/Button';
import styles from './ButtonsPanel.module.scss';

interface Props {
  clearDb(event: MouseEvent<HTMLButtonElement>): void,
  updateDb(event: MouseEvent<HTMLButtonElement>): void
}

const ButtonsPanel: FC<Props> = ({clearDb, updateDb}) => (
  <>
    <h5>Api</h5>
    <div className={styles.buttonsPanelBox}>
      <Button variant="contained" color="primary" onClick={updateDb}>Обновить БД</Button>
      <Button variant="contained" color="secondary" onClick={clearDb}>Очистить БД</Button>
    </div>
  </>
);

export default ButtonsPanel;