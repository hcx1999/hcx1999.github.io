---
title: LATEX 测试
icon: pen-to-square
date: 2022-01-01

pageInfo: false
contributors: false
editLink: false
prev: false
next: false
footer: false
---

$$
\usepackage{color}
\usepackage{bm}
\usepackage{hyperref}
\usepackage{amsmath,amsfonts}
\usepackage{blindtext}
\usepackage{listings}
\usepackage{mathtools}
\usepackage[normalem]{ulem}
\usepackage{multicol}
\usepackage{multirow}
\usepackage{booktabs}
\usepackage{wrapfig}
\usepackage{algorithm}
\usepackage{algorithmic}
\usepackage{natbib}
\usepackage{subfig}
\usepackage{longtable}

\usepackage{amsthm}

\usepackage[T1]{fontenc}

\def\zzz{%
   \catcode`\$=12
   \catcode`\&=12
   \catcode`\#=12
   \catcode`\^=12
   \catcode`\_=12
   \catcode`\~=12
   \catcode`\%=12
   \catcode`\\=12 
   \catcode`\{=12
   \catcode`\}=12
   \zzzz}
{
\catcode`\/=0
\catcode`\[=1
\catcode`\]=2
\catcode`\{=12
\catcode`\}=12
\catcode`\\=12
/long/gdef/zzzz#1\end{zzz}[%
#1/end[zzz]]
]

% Attempt to make hyperref and algorithmic work together better:
% \newcommand{\theHalgorithm}{\arabic{algorithm}}

\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{definition}[theorem]{Definition}
\newtheorem{assumption}[theorem]{Assumption}
\theoremstyle{remark}
\newtheorem{remark}[theorem]{Remark}

% ======= Comments =======
% \newif\ifdebug
% \debugtrue
% \debugfalse

% \newcommand{\todo}[1]{{\color{red}{[TODO: #1]}}}

\newcommand{\lc}[1]{{\color{red}{[\textbf{lc}: #1]}}}
\newcommand{\kaiwen}[1]{{\color{purple}{[\textbf{kaiwen}: #1]}}}
\newcommand{\yuhao}[1]{{\color{orange}{[\textbf{yuhao}: #1]}}}
\newcommand{\jianfei}[1]{{\color{blue}{[\textbf{jianfei}: #1]}}}
\newcommand{\sde}{ScoreSDE}
\newcommand{\ode}{ScoreODE}

\newcommand{\FISH}{\text{Fisher}}
\newcommand{\DSM}{\text{DSM}}
\newcommand{\SM}{\text{SM}}
\newcommand{\FM}{\text{FM}}
\newcommand{\NM}{\text{NM}}
\newcommand{\DM}{\text{DM}}
\newcommand{\CFM}{\text{CFM}}
\newcommand{\DIFF}{\text{Diff}}
\newcommand{\SDE}{\text{SDE}}
\newcommand{\ODE}{\text{ODE}}
\newcommand{\Lip}{\mathrm{Lip}}
\newcommand{\dom}{\mathrm{dom}}
\newcommand{\data}{\text{data}}
\newcommand{\skipp}{\text{skip}}
\newcommand{\out}{\text{out}}
\newcommand{\Gumbel}{\text{Gumbel}}
\newcommand{\softmax}{\mathrm{softmax}}
\newcommand{\logdet}[1]{\log\left|#1\right|}

\newcommand{\hlambda}{\hat{\lambda}}

\DeclarePairedDelimiterX{\infdivx}[2]{(}{)}{%
	#1\;\delimsize\|\;#2%
}
\newcommand{\infdiv}{D\infdivx}
\newcommand{\kl}{D_{\mathrm{KL}}\infdivx}
\newcommand{\fisher}{D_{\mathrm{F}}\infdivx}
\newcommand{\total}{\delta\infdivx}

% ======= Misc math =======
% \newcommand{\vect}[1]{\boldsymbol{\mathbf{#1}}}
\newcommand{\vect}[1]{\bm{#1}}

\newcommand{\argmax}{\operatornamewithlimits{argmax}}
\newcommand{\argmin}{\operatornamewithlimits{argmin}}

\newcommand{\x}{\xv}
\newcommand{\y}{\yv}
\newcommand{\z}{\zv}
\newcommand{\s}{\sv}
\newcommand{\rv}{\vect{r}}
\newcommand{\dm}{\mathrm{d}}

\newcommand{\E}{\mathbb{E}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathcal{N}}
\newcommand{\Bern}{\mbox{Bern}}
\newcommand{\Dir}{\mbox{Dir}}
\newcommand{\Mult}{\mbox{Mult}}
\newcommand{\Dice}{\mbox{Dice}}
\newcommand{\Cat}{\mbox{Cat}}
\newcommand{\dx}{\mathrm{d}x}
\newcommand{\dxv}{\mathrm{d}\xv}
\newcommand{\dy}{\mathrm{d}y}
\newcommand{\dyv}{\mathrm{d}\yv}
\newcommand{\dzv}{\mathrm{d}\zv}
\newcommand{\dwv}{\mathrm{d}\wv}
\newcommand{\dt}{\mathrm{d}t}
\newcommand{\dlog}{\mathrm{d}\log}

% ======= Greek letters =======
\newcommand{\alphav}{\vect\alpha}
\newcommand{\betav}{\vect\beta}
\newcommand{\gammav}{\vect\gamma}
\newcommand{\deltav}{\vect\delta}
\newcommand{\epsilonv}{\vect\epsilon}
\newcommand{\zetav}{\vect\zeta}
\newcommand{\etav}{\vect\eta}
\newcommand{\thetav}{\vect\theta}
\newcommand{\iotav}{\vect\iota}
\newcommand{\kappav}{\vect\kappa}
\newcommand{\lambdav}{\vect\lambda}
\newcommand{\muv}{\vect\mu}
\newcommand{\nuv}{\vect\nu}
\newcommand{\xiv}{\vect\xi}
\newcommand{\omicronv}{\vect\omicron}
\newcommand{\piv}{\vect\pi}
\newcommand{\rhov}{\vect\rho}
\newcommand{\sigmav}{\vect\sigma}
\newcommand{\tauv}{\vect\tau}
\newcommand{\upsilonv}{\vect\upsilon}
\newcommand{\phiv}{\vect\phi}
\newcommand{\chiv}{\vect\chi}
\newcommand{\psiv}{\vect\psi}
\newcommand{\omegav}{\vect\omega}
\newcommand{\varphiv}{\vect\varphi}

\newcommand{\Alphav}{\vect\Alpha}
\newcommand{\Betav}{\vect\Beta}
\newcommand{\Gammav}{\vect\Gamma}
\newcommand{\Deltav}{\vect\Delta}
\newcommand{\Epsilonv}{\vect\Epsilon}
\newcommand{\Zetav}{\vect\Zeta}
\newcommand{\Etav}{\vect\Eta}
\newcommand{\Thetav}{\vect\Theta}
\newcommand{\Iotav}{\vect\Iota}
\newcommand{\Kappav}{\vect\Kappa}
\newcommand{\Lambdav}{\vect\Lambda}
\newcommand{\Muv}{\vect\Mu}
\newcommand{\Nuv}{\vect\Nu}
\newcommand{\Xiv}{\vect\Xi}
\newcommand{\Omicronv}{\vect\Omicron}
\newcommand{\Piv}{\vect\Pi}
\newcommand{\Rhov}{\vect\Rho}
\newcommand{\Sigmav}{\vect\Sigma}
\newcommand{\Tauv}{\vect\Tau}
\newcommand{\Upsilonv}{\vect\Upsilon}
\newcommand{\Phiv}{\vect\Phi}
\newcommand{\Chiv}{\vect\Chi}
\newcommand{\Psiv}{\vect\Psi}
\newcommand{\Omegav}{\vect\Omega}
\newcommand{\Varphiv}{\vect\Varphi}

% ======= English letters =======
\newcommand{\av}{\vect a}
\newcommand{\bv}{\vect b}
\newcommand{\cv}{\vect c}
% \newcommand{\dv}{\vect d}
\newcommand{\ev}{\vect e}
\newcommand{\fv}{\vect f}
\newcommand{\gv}{\vect g}
\newcommand{\hv}{\vect h}
\newcommand{\iv}{\vect i}
\newcommand{\jv}{\vect j}
\newcommand{\kv}{\vect k}
\newcommand{\lv}{\vect l}
\newcommand{\ellv}{\vect \ell}
\newcommand{\mv}{\vect m}
\newcommand{\nv}{\vect n}
\newcommand{\ov}{\vect o}
\newcommand{\pv}{\vect p}
\newcommand{\qv}{\vect q}
%\newcommand{\rv}{\vect r}
\newcommand{\sv}{\vect s}
\newcommand{\tv}{\vect t}
\newcommand{\uv}{\vect u}
\newcommand{\vv}{\vect v}
\newcommand{\wv}{\vect w}
\newcommand{\xv}{\vect x}
\newcommand{\yv}{\vect y}
\newcommand{\zv}{\vect z}

\newcommand{\Av}{\vect A}
\newcommand{\Bv}{\vect B}
\newcommand{\Cv}{\vect C}
\newcommand{\Dv}{\vect D}
\newcommand{\Ev}{\vect E}
\newcommand{\Fv}{\vect F}
\newcommand{\Gv}{\vect G}
\newcommand{\Hv}{\vect H}
\newcommand{\Iv}{\vect I}
\newcommand{\Jv}{\vect J}
\newcommand{\Kv}{\vect K}
\newcommand{\Lv}{\vect L}
\newcommand{\Mv}{\vect M}
\newcommand{\Nv}{\vect N}
\newcommand{\Ov}{\vect O}
\newcommand{\Pv}{\vect P}
\newcommand{\Qv}{\vect Q}
\newcommand{\Rv}{\vect R}
\newcommand{\Sv}{\vect S}
\newcommand{\Tv}{\vect T}
\newcommand{\Uv}{\vect U}
\newcommand{\Vv}{\vect V}
\newcommand{\Wv}{\vect W}
\newcommand{\Xv}{\vect X}
\newcommand{\Yv}{\vect Y}
\newcommand{\Zv}{\vect Z}

\newcommand{\Ac}{\mathcal A}
\newcommand{\Bc}{\mathcal B}
\newcommand{\Cc}{\mathcal C}
\newcommand{\Dc}{\mathcal D}
\newcommand{\Ec}{\mathcal E}
\newcommand{\Fc}{\mathcal F}
\newcommand{\Gc}{\mathcal G}
\newcommand{\Hc}{\mathcal H}
\newcommand{\Ic}{\mathcal I}
\newcommand{\Jc}{\mathcal J}
\newcommand{\Kc}{\mathcal K}
\newcommand{\Lc}{\mathcal L}
\newcommand{\Mc}{\mathcal M}
\newcommand{\Nc}{\mathcal N}
\newcommand{\Oc}{\mathcal O}
\newcommand{\Pc}{\mathcal P}
\newcommand{\Qc}{\mathcal Q}
\newcommand{\Rc}{\mathcal R}
\newcommand{\Sc}{\mathcal S}
\newcommand{\Tc}{\mathcal T}
\newcommand{\Uc}{\mathcal U}
\newcommand{\Vc}{\mathcal V}
\newcommand{\Wc}{\mathcal W}
\newcommand{\Xc}{\mathcal X}
\newcommand{\Yc}{\mathcal Y}
\newcommand{\Zc}{\mathcal Z}

%\newcommand{\Thetac}{\mathcal \Theta}
%\newcommand{\Phic}{\mathcal \Phi}

\newcommand{\Ab}{\mathbb A}
\newcommand{\Bb}{\mathbb B}
\newcommand{\Cb}{\mathbb C}
\newcommand{\Db}{\mathbb D}
\newcommand{\Eb}{\mathbb E}
\newcommand{\Fb}{\mathbb F}
\newcommand{\Gb}{\mathbb G}
\newcommand{\Hb}{\mathbb H}
\newcommand{\Ib}{\mathbb I}
\newcommand{\Jb}{\mathbb J}
\newcommand{\Kb}{\mathbb K}
\newcommand{\Lb}{\mathbb L}
\newcommand{\Mb}{\mathbb M}
\newcommand{\Nb}{\mathbb N}
\newcommand{\Ob}{\mathbb O}
\newcommand{\Pb}{\mathbb P}
\newcommand{\Qb}{\mathbb Q}
\newcommand{\Rb}{\mathbb R}
\newcommand{\Sb}{\mathbb S}
\newcommand{\Tb}{\mathbb T}
\newcommand{\Ub}{\mathbb U}
\newcommand{\Vb}{\mathbb V}
\newcommand{\Wb}{\mathbb W}
\newcommand{\Xb}{\mathbb X}
\newcommand{\Yb}{\mathbb Y}
\newcommand{\Zb}{\mathbb Z}

% \newcommand{\norm}[1]{\left\lVert#1\right\rVert}
% \newcommand{\abs}[1]{\left|#1\right|}
\newcommand{\inorm}[1]{\norm{#1}_\infty}
\newcommand{\iprod}[1]{\left\langle#1\right\rangle}

\newcommand{\splitop}{\mbox{split}}
\newcommand{\concat}{\mbox{concat}}

\newcommand{\cvloss}{f_{CV, v}}
\newcommand{\loss}{f_v}
\newcommand{\ZL}{Z^{(l)}}
\newcommand{\ZLp}{Z^{(l+1)}}
\newcommand{\HL}{H^{(l)}}
\newcommand{\HLp}{H^{(l+1)}}
\newcommand{\scv}{_{CV}}
\newcommand{\ZLcv}{\ZL\scv}
\newcommand{\ZLpcv}{\ZLp\scv}
\newcommand{\HLcv}{\HL\scv}
\newcommand{\HLpcv}{\HLp\scv}
\newcommand{\WL}{W^{(l)}}
\newcommand{\WLT}{W^{(l)\top}}
\newcommand{\PhL}{\hat P^{(l)}}
\newcommand{\Var}{\mbox{Var}}
\newcommand{\Cov}{\mbox{Cov}}
\newcommand{\diag}{\mbox{diag}}
\newcommand{\Diag}{\mbox{Diag}}

%\newcommand{\vp}{{v^\prime}}
\newcommand{\bl}{{(l)}}
\newcommand{\bll}{{(l+1)}}
\newcommand{\bL}{{(L)}}
\newcommand{\NS}{\mbox{NS}}
\newcommand{\CV}{\mbox{CV}}
\newcommand{\CVD}{\mbox{CVD}}
\newcommand{\Ideal}{\mbox{Ideal}}
\newcommand{\nbr}{\Nc(u)}
\newcommand{\snbr}{\hat \Nc^\bl(u)}
% \newcommand{\var}[2]{\Var_{#1}\left[#2\right]}
%\newcommand{\rh}{\mathring{h}}
% \newcommand{\tr}[1]{\mbox{tr}\left(#1\right)}
\newcommand{\tr}{\mathrm{tr}}



% \newtheorem{theorem}{Theorem}[section]
% \newtheorem{corollary}{Corollary}[theorem]
% \newtheorem{lemma}[theorem]{Lemma}
% \newtheorem{example}{例}
% \newreptheorem{proposition}{Proposition}
% \newreptheorem{theorem}{Theorem}
% \newreptheorem{lemma}{Lemma}



\newcommand{\hst}{\hat \sv_t}
\newcommand{\hstt}{\hat \sv_{t+1}}
\newcommand{\Dfhst}{\Delta \fv_i(\hst)}
\newcommand{\bfhst}{\bar \fv(\hst)}
\newcommand{\bfhstt}{\bar \fv(\hstt)}
\newcommand{\bhstt}{\bar \sv_{t+1}}
% \newcommand{\grad}[1]{\nabla_{#1} \fv(#1)}
\newcommand{\hess}[1]{\nabla^2_{#1} \fv(#1)}
\newcommand{\lmax}{\lambda_{\mbox{max}}}
\newcommand{\lmin}{\lambda_{\mbox{min}}}
\newcommand{\hsz}{\hat \sv_0}
\newcommand{\Uniform}{\mbox{Uniform}}


\DeclareMathOperator{\sign}{sign}
% \DeclareMathOperator{\Tr}{Tr}




% \begin{figure}[htbp]
%     \centering

%     \subfigure[pic1]{
%     \begin{minipage}[t]{0.2\linewidth}
%     \centering
%     \includegraphics[width=\linewidth]{pca_center/x1_rec1.png}
%     \end{minipage}
% 	}
	
%     \subfigure[pic2]{
%     \begin{minipage}[t]{0.2\linewidth}
%     \centering
%     \includegraphics[width=\linewidth]{pca_center/x1_rec2.png}
%     \end{minipage}
%     }
%     \centering
%     \caption{}
%     \label{}
% \end{figure}


\newcommand{\qsh}[1]{{\textcolor{blue}{(Qsh: #1)}}}
\newcommand{\chen}[1]{{\textcolor{cyan}{(Yongxin: #1)}}}
\newcommand{\mingyu}[1]{{\textcolor{magenta}{(Ming-Yu: #1)}}}
$$