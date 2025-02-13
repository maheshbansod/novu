import { InboxService } from '../api';
import type { NovuEventEmitter } from '../event-emitter';
import type { Result } from '../types';
import { Preference } from './preference';
import type { UpdatePreferencesArgs } from './types';
import { NovuError } from '../utils/errors';

export const updatePreference = async ({
  emitter,
  apiService,
  args,
}: {
  emitter: NovuEventEmitter;
  apiService: InboxService;
  args: UpdatePreferencesArgs;
}): Result<Preference> => {
  const { workflowId, channelPreferences } = args;
  try {
    emitter.emit('preferences.update.pending', {
      args,
      data: args.preference
        ? new Preference({
            ...args.preference,
            channels: {
              ...args.preference.channels,
              ...channelPreferences,
            },
          })
        : undefined,
    });

    let response;
    if (workflowId) {
      response = await apiService.updateWorkflowPreferences({ workflowId, channelPreferences });
    } else {
      response = await apiService.updateGlobalPreferences(channelPreferences);
    }

    const preference = new Preference(response);
    emitter.emit('preferences.update.resolved', { args, data: preference });

    return { data: preference };
  } catch (error) {
    emitter.emit('preferences.update.resolved', { args, error });

    return { error: new NovuError('Failed to fetch notifications', error) };
  }
};
