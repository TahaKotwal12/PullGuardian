# backend/app/services/ai_service.py
from openai import AsyncOpenAI
import tiktoken

class AICodeReviewer:
    def __init__(self, api_key: str):
        self.client = AsyncOpenAI(api_key=api_key)
        self.encoding = tiktoken.get_encoding("cl100k_base")
    
    async def review_code_diff(self, diff: str, language: str) -> Dict:
        prompt = f"""
        Analyze this {language} code diff for:
        1. Security vulnerabilities
        2. Code quality issues
        3. Performance concerns
        4. Best practice violations
        
        Diff:
        {diff}
        
        Provide specific, actionable feedback with line numbers.
        """
        
        response = await self.client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1
        )
        
        return {
            "review": response.choices[0].message.content,
            "suggestions": self._parse_suggestions(response.choices[0].message.content)
        }