import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const WebPubSubTrigger: AzureFunction = async function (context: Context, req: HttpRequest, data, pubSubOut): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    context.res = {
        status: 200, /* Defaults to 200 */
    };
};

export default WebPubSubTrigger;