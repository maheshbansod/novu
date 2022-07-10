import { Injectable } from '@nestjs/common';
import { MessageRepository } from '@novu/dal';
import { ChannelTypeEnum } from '@novu/shared';
import { GetUnseenCountCommand } from './get-unseen-count.command';

@Injectable()
export class GetUnseenCount {
  constructor(private messageRepository: MessageRepository) {}

  async execute(command: GetUnseenCountCommand): Promise<{ count: number; feeds: { _id: string; count: number }[] }> {
    const { count, feeds } = await this.messageRepository.getUnseenCount(
      command.environmentId,
      command.subscriberId,
      ChannelTypeEnum.IN_APP
    );

    return { feeds, count };
  }
}
