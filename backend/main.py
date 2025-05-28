import httpx
from typing import List, Dict
import base64

class GitHubService:
    def __init__(self, token: str):
        self.token = token
        self.client = httpx.AsyncClient(
            headers={"Authorization": f"token {token}"}
        )
    
    async def get_pull_request_files(self, owner: str, repo: str, pr_number: int):
        url = f"https://api.github.com/repos/{owner}/{repo}/pulls/{pr_number}/files"
        response = await self.client.get(url)
        return response.json()
    
    async def get_file_content(self, owner: str, repo: str, path: str, ref: str):
        url = f"https://api.github.com/repos/{owner}/{repo}/contents/{path}"
        response = await self.client.get(url, params={"ref": ref})
        content = response.json()
        return base64.b64decode(content["content"]).decode()

def main():
    print("Hello from backend!")


if __name__ == "__main__":
    main()
