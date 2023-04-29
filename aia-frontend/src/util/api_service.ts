export const BASE_URL = "http://127.0.0.1:5000";

/** Initially sends the URL of the business to the server. Returns a summary of the business. */
export async function send_url(url: string): Promise<Response> {
    try {
        return await fetch(BASE_URL + "/init/summarize_webpage", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"webpage_url": url})
        });
    } catch (error:any) {
        throw new Error(`Failed to connect to server: ${error.message}`);
    }
}

export async function send_businesscase(use_case: string): Promise<Response> {
    try {
        return await fetch(BASE_URL + "/init/use_case", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"case_description": use_case})
        });
    } catch (error:any) {
        throw new Error(`Failed to connect to server: ${error.message}`);
    }
}
