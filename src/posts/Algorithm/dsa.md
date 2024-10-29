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

```cpp :collapsed-lines=12
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

## 字符串

### 英语数字转换器

```cpp :collapsed-lines=12
#include<iostream>
#include<cstdio>
#include<cstring>

using namespace std;

char c[10000];
int sgn=1, num1=0, num=0, tmp=0;

int getWordEnd(int x){
	while(++x){
		if(c[x]==' '||c[x]=='\0') break;
	}
	return x;
}

int same(char *x, char *y){
	int len = strlen(x), leny = strlen(y);
	if(len!=leny) return 0;
	for(int i = 0; i < len; ++i){
		if(x[i]!=y[i]) return 0;
	}
	return 1;
}

void numOper(char* word){
//	printf("%s\n", word);
//	int sgn=1, num1=0, num=0, tmp=0;
	
	if(same(word, "negative")) {sgn=-1;}
	else if(same(word, "million")) {num1=(num+tmp)*1000000;num=0;tmp=0;}
	else if(same(word, "thousand")) {num=(num+tmp)*1000;tmp=0;}
	else if(same(word, "hundred")) {num+=tmp*100;tmp=0;}
	
	else if(same(word, "zero")) {tmp=0;}
	else if(same(word, "one")) {tmp=1;}
	else if(same(word, "two")) {tmp=2;}
	else if(same(word, "three")) {tmp=3;}
	else if(same(word, "four")) {tmp=4;}
	else if(same(word, "five")) {tmp=5;}
	else if(same(word, "six")) {tmp=6;}
	else if(same(word, "seven")) {tmp=7;}
	else if(same(word, "eight")) {tmp=8;}
	else if(same(word, "nine")) {tmp=9;}
	
	else if(same(word, "ten")) {num+=10;}
	else if(same(word, "eleven")) {num+=11;}
	else if(same(word, "twelve")) {num+=12;}
	else if(same(word, "thirteen")) {num+=13;}
	else if(same(word, "fourteen")) {num+=14;}
	else if(same(word, "fifteen")) {num+=15;}
	else if(same(word, "sixteen")) {num+=16;}
	else if(same(word, "seventeen")) {num+=17;}
	else if(same(word, "eighteen")) {num+=18;}
	else if(same(word, "nineteen")) {num+=19;}
	else if(same(word, "twenty")) {num+=20;}
	else if(same(word, "thirty")) {num+=30;}
	else if(same(word, "forty")) {num+=40;}
	else if(same(word, "fifty")) {num+=50;}
	else if(same(word, "sixty")) {num+=60;}
	else if(same(word, "seventy")) {num+=70;}
	else if(same(word, "eighty")) {num+=80;}
	else if(same(word, "ninety")) {num+=90;}

//	num+=tmp;tmp=0;
}

void solve(){
	int len = strlen(c);
	sgn=1, num1=0, num=0, tmp=0;
	for(int i = 0; i < len;){
		int end = getWordEnd(i);
//		printf("%.*s\n", end-i, c+i);
		char word[100];
		for(int j = i; j < end; ++j){
			word[j-i]=c[j];
		}word[end-i]='\0';
//		printf("%s\n", word);
		numOper(word);
		i=end+1;
	}
	cout<<sgn*(num1+num+tmp)<<endl;
}

int main(){
	while(1){
		cin.getline(c, 10000, '\n');
		if(c[0]=='\0') break;
		solve();
	}
	return 0;
}
```

## 树

### 哈夫曼编码树

第一次使用指针构建数据结构，有一个非常大的bug就是priority_queue中的q.top()返回的是一个固定的地址的类，因此不能直接使用，应该new一个之后再使用。还有，尽量少的直接定义用node型变量而是用node* nd = new node来避免重复使用地址。

```cpp :collapsed-lines=12
#include <iostream>
#include <cstdio>
#include <algorithm>
#include <queue>
#include <cstring>
#include <typeinfo>

using namespace std;

struct node{
	int val = 0;
	node *fa = nullptr;
	node *son1 = nullptr;
	node *son2 = nullptr;
	bool operator < (const node& tmp) const{
		return val > tmp.val;
	}
};
priority_queue<node> q;

int dfs(node* rt, int d){
	if(rt->son1 == nullptr && rt->son2 == nullptr){
		return (rt->val) * d;
	}
	return dfs(rt->son1, d+1) + 
		   dfs(rt->son2, d+1);
}

void test(){
	int* a, b;
	cout<<typeid(a).name()<<' '<<typeid(b).name()<<endl;
}

node* deepCopy(const node x){
	node* y;
	y->val = x.val;y->son1 = x.son1;y->son2 = x.son2;y->fa = x.fa;
	return y;
}

int main(){
//	test();
	int T;cin>>T;while(T--){
		int n;cin>>n;
		while(!q.empty()) q.pop();
		while(n--){
			int temp;cin>>temp;
			node* tmp = new node;tmp->val = temp;
			q.push(*tmp);
		}
		while(q.size() > 1){
			node* x1 = new node(q.top());q.pop();
			node* x2 = new node(q.top());q.pop();
			node* y = new node;y->val = x1->val + x2->val;
			y->son1 = x1; y->son2 = x2;
			x1->fa = x2->fa = y;
			q.push(*y);
		}
		node* rt = new node(q.top());q.pop();
//		cout<<rt->val<<' '<<rt->son1->val<<' '<<rt->son2->val<<' '<<rt->son1->son1->val<<' '<<rt->son1->son2->val<<endl<<endl;
		cout<<dfs(rt, 0)<<endl;
	}
	return 0;
}
```

### 发现它，抓住它

做法1：对森林中每棵并查集建立双向的enemy关系，每次合并相当于是合并最多4棵并查集（即a所在的、a敌对的、b所在的、b敌对的）。每个enemy只存在与树根中，其他节点中的enemy是无效量，从而保证唯一性。注意节点的enemy随时可能失去树根身份，所以使用时必须套上`find(en[x])`。

```cpp :collapsed-lines=12
#include <iostream>
#include <cstdio>
#include <cstring>

using namespace std;

int fa[200000], en[200000];

int f(int x){
	if(x == fa[x]) return x;
	return fa[x] = f(fa[x]);
}

int main(){
	int T;cin>>T;
	while(T--){
		int N, M; cin>>N>>M;
		for(int i = 1; i <= N; ++i) {fa[i] = i;en[i] = 0;}
		for(int i = 1; i <= M; ++i){
			char ch;int x, y;cin>>ch>>x>>y;
			x = f(x); y = f(y);
			if(ch == 'A'){
				if(x == y) cout<<"In the same gang."<<endl;
				else if(f(en[x]) == y || f(en[y]) == x) cout<<"In different gangs."<<endl;
				else cout<<"Not sure yet."<<endl;
			}
			else{
				if(f(en[x]) == y && f(en[y]) == x) continue;
				if(f(en[x]) == 0 && f(en[y]) == 0) {en[x] = y; en[y] = x;continue;}
				if(f(en[x])) fa[y] = f(en[x]);
				if(f(en[y])) fa[x] = f(en[y]);
			}
		}
	}
	return 0;
}
```

做法2：带权并查集，每次路径压缩时更新节点权值。注意路径压缩可以保证m次操作的最坏时间复杂度为$O(mlogn)$，所以不需要担心额外进行操作会导致复杂度变高。

```cpp
#include <iostream>
#include <cstdio>
#include <cstring>

using namespace std;

int fa[200000], en[200000];

int f(int x){
	if(x == fa[x]) return x;
	return fa[x] = f(fa[x]);
}

int main(){
	int T;cin>>T;
	while(T--){
		int N, M; cin>>N>>M;
		for(int i = 1; i <= N; ++i) {fa[i] = i;en[i] = 0;}
		for(int i = 1; i <= M; ++i){
			char ch;int x, y;cin>>ch>>x>>y;
			x = f(x); y = f(y);
			if(ch == 'A'){
				if(x == y) cout<<"In the same gang."<<endl;
				else if(f(en[x]) == y || f(en[y]) == x) cout<<"In different gangs."<<endl;
				else cout<<"Not sure yet."<<endl;
			}
			else{
				if(f(en[x]) == y && f(en[y]) == x) continue;
				if(f(en[x]) == 0 && f(en[y]) == 0) {en[x] = y; en[y] = x;continue;}
				if(f(en[x])) fa[y] = f(en[x]);
				if(f(en[y])) fa[x] = f(en[y]);
			}
		}
	}
	return 0;
}
```