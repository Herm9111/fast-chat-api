import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, connection): Promise<void> {
    context.res = {
        status: 200, /* Defaults to 200 */
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            connection
        }
    };

};

export default httpTrigger;