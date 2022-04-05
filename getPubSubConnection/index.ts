import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const { WebPubSubServiceClient } = require("@azure/web-pubsub");

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, connection): Promise<void> {
    const serviceClient = new WebPubSubServiceClient(process.env['WebPubSubConnectionString'], "fastChat");
    const token = await serviceClient.getClientAccessToken({
         userId: req.headers['headers.x-ms-client-principal-name'],
         roles: [ "webpubsub.sendToGroup", "webpubsub.joinLeaveGroup" ]
        });

    context.res = {
        status: 200, /* Defaults to 200 */
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            accessToken: token,
            baseUrl: "wss://fast-chat-ps.webpubsub.azure.com/client/hubs/fastChat",
            url: `wss://fast-chat-ps.webpubsub.azure.com:443/client/hubs/fastChat?access_token=${token}`
        }
    };

};

export default httpTrigger;