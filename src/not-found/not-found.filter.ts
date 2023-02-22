import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { NotFoundException } from 'src/exceptions/notfound.exception';

@Catch(NotFoundException)
export class NotFoundFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const request = context.getRequest();
    const response = context.getResponse();

    response
      .status(404)
      .json({
          sastus: "Not found",
          message: exception.message,
          timestamp: new Date().toISOString()
      })

  }
}
