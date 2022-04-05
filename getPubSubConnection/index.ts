import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const { WebPubSubServiceClient } = require("@azure/web-pubsub");

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, connection): Promise<void> {
    const serviceClient = new WebPubSubServiceClient(process.env['WebPubSubConnectionString'], "fastChat");
    console.log(req.headers['headers.x-ms-client-principal-name']);
    const token = await serviceClient.getClientAccessToken({
         userId: req.headers['headers.x-ms-client-principal-name'],
         roles: [ "webpubsub.sendToGroup", "webpubsub.joinLeaveGroup" ]
        });

    context.res = {
        status: 200, /* Defaults to 200 */
        headers: {
            'Content-Type': 'application/json'
        },
        body: token
    };

};

export default httpTrigger;