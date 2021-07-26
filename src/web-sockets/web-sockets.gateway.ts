import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { WebSocketsService } from './web-sockets.service';
import { CreateWebSocketDto } from './dto/create-web-socket.dto';
import { UpdateWebSocketDto } from './dto/update-web-socket.dto';

@WebSocketGateway()
export class WebSocketsGateway {
  constructor(private readonly webSocketsService: WebSocketsService) {}

  @SubscribeMessage('createWebSocket')
  create(@MessageBody() createWebSocketDto: CreateWebSocketDto) {
    return this.webSocketsService.create(createWebSocketDto);
  }

  @SubscribeMessage('findAllWebSockets')
  findAll() {
    return this.webSocketsService.findAll();
  }

  @SubscribeMessage('findOneWebSocket')
  findOne(@MessageBody() id: number) {
    return this.webSocketsService.findOne(id);
  }

  @SubscribeMessage('updateWebSocket')
  update(@MessageBody() updateWebSocketDto: UpdateWebSocketDto) {
    return this.webSocketsService.update(
      updateWebSocketDto.id,
      updateWebSocketDto,
    );
  }

  @SubscribeMessage('removeWebSocket')
  remove(@MessageBody() id: number) {
    return this.webSocketsService.remove(id);
  }
}
