import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, pubSubIn, pubSubOut): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    console.log('Request from: ', context.bindingData.request.connectionContext.userId);
    console.log('Request message data: ', pubSubIn);
    console.log('Request message dataType: ', context.bindingData.request.dataType);

};

export default httpTrigger;