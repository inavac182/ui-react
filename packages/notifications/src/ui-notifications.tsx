'use client';
import React, { useCallback, useMemo, useState } from 'react';

import { useViewport } from '@uireact/foundation';

import { UiNotificationWrapper } from './private';
import { useNotifications } from './hook';
import styles from './ui-notification.scss';

export const UiNotifications: React.FC = () => {
  const { isSmall } = useViewport();
  const { notifications } = useNotifications();

  const [hiddenNotifications, setHiddenNotifications] = useState<number[]>([]);

  const onClose = useCallback((index: number) => {
    setHiddenNotifications((hiddenNotifications) => [...hiddenNotifications, index]);
  }, []);

  const NotificationsComponent = useMemo(() => {
    return (
      <>
        {notifications.map((notification, index) => {
          const isHidden = hiddenNotifications.filter((hiddenId) => hiddenId === index).length > 0;

          return isHidden ? null : (
            <UiNotificationWrapper
              notification={notification}
              key={`notitication-in-${index}`}
              id={index}
              onClose={onClose}
            />
          );
        })}
      </>
    );
  }, [notifications, hiddenNotifications, onClose]);

  return <div className={isSmall ? styles.bottomContainer : styles.container}>{NotificationsComponent}</div>;
};

UiNotifications.displayName = 'UiNotifications';
