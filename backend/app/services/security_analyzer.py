# backend/app/services/security_analyzer.py
import ast
import re
from typing import List, Dict
from dataclasses import dataclass

@dataclass
class SecurityIssue:
    id: str
    title: str
    description: str
    severity: str
    file: str
    line: int
    rule_id: str

class SecurityAnalyzer:
    def __init__(self):
        self.rules = {
            'sql_injection': r'(execute|query)\s*\(\s*["\'].*\+.*["\']',
            'hardcoded_secrets': r'(password|secret|key|token)\s*=\s*["\'][^"\']+["\']',
            'xss_vulnerability': r'innerHTML\s*=\s*.*\+',
        }
    
    def analyze_file(self, content: str, filename: str) -> List[SecurityIssue]:
        issues = []
        lines = content.split('\n')
        
        for line_num, line in enumerate(lines, 1):
            for rule_name, pattern in self.rules.items():
                if re.search(pattern, line, re.IGNORECASE):
                    issues.append(SecurityIssue(
                        id=f"{filename}_{line_num}_{rule_name}",
                        title=self._get_title(rule_name),
                        description=self._get_description(rule_name),
                        severity=self._get_severity(rule_name),
                        file=filename,
                        line=line_num,
                        rule_id=rule_name
                    ))
        return issues