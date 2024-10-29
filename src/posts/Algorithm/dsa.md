---
title: 数算选做
icon: pen-to-square

pageInfo: false
contributors: false
editLink: false
prev: false
next: false
footer: false
---

## 线性数据结构

### 中缀表达式的值

```cpp
#include<cstdio>
#include<iostream>
#include<stack>
#include<cmath>

using namespace std;

int T;

bool isNumber(char x){
	if(x <= '9' && x >= '0') return true;
	return false;
}

string number(string ch){
	
	string str = "";
	while(isNumber(ch[0])){
		
		str.push_back(ch[0]);
		ch.erase(0, 1);
	}
	return str;
}

int prio(char x){
	if(x == '(' || x == ')') return 0;
	if(x == '+' || x == '-') return 1;
	if(x == '*' || x == '/') return 2;
	if(x == '^') return 3;
	return -1;
}

int strToNumber(string ch){
	
	int ans = 0, len = ch.length();
	for(int i = 0; i < len; ++i)
		ans = ans*10 + ch[i] - '0';
	return ans;
}

string suffix(string ch){
	
	stack<char> sig;
	string ans = "";
	while(ch != ""){
		
		if(ch[0]==' '){
			ch.erase(0, 1);
		}
		else if(isNumber(ch[0])){
			string num = number(ch);
			ans+=num+".";
			ch.erase(0, num.length());
		}
		else if(ch[0]=='-' && isNumber(ch[1])){
			ch.erase(0, 1);
			string num = number(ch);
			ans+="-"+num+'.';
			ch.erase(0, num.length());
		}
		else if(ch[0] == '('){
			sig.push('(');
			ch.erase(0, 1);
		}
		else if(ch[0] == ')'){
			while(sig.top() != '('){
				ans.push_back(sig.top());ans.push_back('.');
				sig.pop();
			}
			sig.pop();
			ch.erase(0, 1);
		}
		else{
			char now = ch[0];
			ch.erase(0, 1);
			while(!sig.empty() && prio(sig.top()) >= prio(now)){
				ans.push_back(sig.top());ans.push_back('.');
				sig.pop();
			}
			sig.push(now);
		}
	}
	while(!sig.empty()){
		
		ans.push_back(sig.top());ans.push_back('.');
		sig.pop();
	}
	return ans;
}

int solve(string ch){
	
	stack<int> num;
	while(ch != ""){
		
		if(isNumber(ch[0])){
			string str = number(ch);
			ch.erase(0, str.length()+1);
			num.push(strToNumber(str));
		}
		else if(ch[0] == '-' && isNumber(ch[1])){
			ch.erase(0, 1);
			string str = number(ch);
			ch.erase(0, str.length()+1);
			num.push(0-strToNumber(str));
		}
		else{
			char now = ch[0];ch.erase(0, 2);
			int num1 = num.top();num.pop();
			int num2 = num.top();num.pop();
			if(now == '+') num.push(num2+num1);
			if(now == '-') num.push(num2-num1);
			if(now == '*') num.push(num2*num1);
			if(now == '/') num.push(num2/num1);
			if(now == '^') num.push(pow(num2, num1));
		}
	}
	return num.top();
}

int main() {
	scanf("%d\n", &T);while(T--){
		string ch;
//		cin>>ch;
		getline(cin, ch);
//		cout<<suffix(ch)<<endl;
		cout<<solve(suffix(ch))<<endl;
	}
	return 0;
}
```
