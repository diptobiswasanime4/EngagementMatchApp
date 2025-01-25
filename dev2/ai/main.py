import requests
import json

url = "http://localhost:11434/api/generate"

headers = {
    'Content-Type': 'application/json',
}

history = []

def generate_response(prompt):
    history.append(prompt)
    final_prompt = "\n".join(history)

    data = {
        "model": "lulu",
        "prompt": final_prompt,
        "stream": False
    }

    response = requests.post(url, headers=headers, data=json.dumps(data))

    if response.status_code == 200:
        response = response.text
        data = json.loads(response)
        actual_response = data['response']
        return actual_response
    else:
        print("Error:", response.text)

print(generate_response("who are you?"))