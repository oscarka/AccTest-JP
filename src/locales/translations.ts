export type Language = 'en' | 'ja' | 'zh';

export const translations = {
  en: {
    // Layout
    dashboard: 'Dashboard',
    practice: 'Practice',
    history: 'History',
    settings: 'Settings',
    studyPlan: 'Study Plan',
    mockExam: 'Mock Exam',
    weakPoints: 'Weak Points',
    examCountdown: 'Exam in 14 days • 85% Ready',

    // Dashboard
    overview: 'Overview',
    overviewDesc: 'Keep up the momentum for your Nissho Boki Level 2 exam.',
    forecastedPassRate: 'Forecasted Pass Rate',
    target: 'Target',
    todayTasks: 'Today\'s Tasks',
    costAccounting: 'Cost Accounting',
    indBookkeeping: 'Industrial Bookkeeping',
    journalEntries: 'Journal Entries',
    comBookkeeping: 'Commercial Bookkeeping',
    qCount: '{{count}}Qs',
    startPractice: 'Start Practice',
    
    // Practice
    practiceMode: 'Select Practice Mode',
    practiceModeDesc: 'Choose a practice mode to begin your focused study session.',
    randomPractice: 'Random Practice',
    randomPracticeDesc: 'Test your readiness with a randomized set of questions across all topics.',
    weaknessFocus: 'Weakness Focus',
    weaknessFocusDesc: 'Focus exclusively on your historical mistakes and lowest performing areas.',
    topicPractice: 'Topic Practice',
    topicPracticeDesc: 'Select specific accounting chapters and ledger concepts to drill down into.',
    start: 'Start',

    // Question
    qNumber: 'Q3 / 10',
    qText: 'Sold merchandise to Company A for ¥500,000 on credit.',
    qInstruction: 'Provide the appropriate journal entry for the above transaction.',
    debit: 'Debit',
    credit: 'Credit',
    accountTitle: 'Account',
    amount: 'Amount',
    addRow: 'Add Row',
    submit: 'Submit',

    // Result
    correct: 'Correct',
    qLabel: 'Q4 Journal Entry',
    modelAnswer: 'Model Answer',
    explanation: 'Explanation',
    explanationText: 'The promissory note received for the sale of goods is recorded as an increase in the "Notes Receivable" account (asset) on the debit side. At the same time, because the payment was collected, it is recorded as a decrease in the "Accounts Receivable" account (asset) on the credit side.',
    commonMistake: 'Common Mistake: Be careful not to swap the debit and credit accounts.',
    nextQuestion: 'Next Question',

    // History
    learningHistory: 'Learning History',
    historyDesc: 'Review your past study sessions and track your progress over time.',
    recentActivity: 'Recent Activity',
    score: 'Score',
    date: 'Date',

    // Settings
    settingsDesc: 'Manage your app preferences and account settings.',
    languageSettings: 'Language Settings',
    selectLanguage: 'Select Language',
    account: 'Account',
    logout: 'Log Out',
    notifications: 'Notifications',
    pushNotifications: 'Push Notifications',
  },
  ja: {
    // Layout
    dashboard: 'ダッシュボード',
    practice: '練習',
    history: '履歴',
    settings: '設定',
    studyPlan: '学習プラン',
    mockExam: '模擬試験',
    weakPoints: '弱点',
    examCountdown: '試験まで14日 • 準備率85%',

    // Dashboard
    overview: '概要',
    overviewDesc: '日商簿記2級試験に向けて勢いを維持しましょう。',
    forecastedPassRate: '予想合格率',
    target: '目標',
    todayTasks: '今日のタスク',
    costAccounting: '原価計算',
    indBookkeeping: '工業簿記',
    journalEntries: '仕訳',
    comBookkeeping: '商業簿記',
    qCount: '{{count}}問',
    startPractice: '学習開始',
    
    // Practice
    practiceMode: '練習モードの選択',
    practiceModeDesc: '集中して学習するための練習モードを選択してください。',
    randomPractice: 'ランダム練習',
    randomPracticeDesc: 'すべてのトピックからランダムに出題され、準備度を確認します。',
    weaknessFocus: '弱点克服',
    weaknessFocusDesc: '過去に間違えた問題や、成績の低い分野に集中します。',
    topicPractice: '分野別練習',
    topicPracticeDesc: '特定の会計章と帳簿の概念を選択して深く掘り下げます。',
    start: '開始',

    // Question
    qNumber: '第3問 / 全10問',
    qText: 'A社に商品￥500,000を売り上げ、代金は掛けとした。',
    qInstruction: '上記の取引について、適切な仕訳を行いなさい。',
    debit: '借方',
    credit: '貸方',
    accountTitle: '勘定科目',
    amount: '金額',
    addRow: '行を追加',
    submit: '提出する',

    // Result
    correct: '正解',
    qLabel: '第4問 仕訳問題',
    modelAnswer: '模範解答',
    explanation: '解説',
    explanationText: '商品の販売代金として受け取った約束手形は、「受取手形」勘定（資産）の増加として借方に記入します。同時に、代金を回収したため「売掛金」勘定（資産）の減少として貸方に記入します。',
    commonMistake: 'よくある間違い：借方と貸方の勘定科目を逆にしてしまうミスに注意しましょう。',
    nextQuestion: '次の問題へ',

    // History
    learningHistory: '学習履歴',
    historyDesc: '過去の学習セッションを見直し、時間の経過に伴う進捗を確認します。',
    recentActivity: '最近の活動',
    score: 'スコア',
    date: '日付',

    // Settings
    settingsDesc: 'アプリの環境設定とアカウント設定を管理します。',
    languageSettings: '言語設定',
    selectLanguage: '言語を選択',
    account: 'アカウント',
    logout: 'ログアウト',
    notifications: '通知',
    pushNotifications: 'プッシュ通知',
  },
  zh: {
    // Layout
    dashboard: '仪表盘',
    practice: '练习',
    history: '历史',
    settings: '设置',
    studyPlan: '学习计划',
    mockExam: '模拟考试',
    weakPoints: '薄弱环节',
    examCountdown: '距考试14天 • 85%已准备',

    // Dashboard
    overview: '概览',
    overviewDesc: '保持通过日商簿记2级考试的动力。',
    forecastedPassRate: '预计通过概率',
    target: '目标',
    todayTasks: '今日任务',
    costAccounting: '成本计算',
    indBookkeeping: '工业簿记',
    journalEntries: '分录',
    comBookkeeping: '商业簿记',
    qCount: '×{{count}}题',
    startPractice: '开始刷题',
    
    // Practice
    practiceMode: '选择练习模式',
    practiceModeDesc: '选择一个练习模式，开始你的专注学习过程。',
    randomPractice: '随机练习',
    randomPracticeDesc: '通过全科目的随机题目测试你的准备水平。',
    weaknessFocus: '弱点强化',
    weaknessFocusDesc: '专注于你历史遗留的错题和表现最差的领域。',
    topicPractice: '知识点练习',
    topicPracticeDesc: '选择特定的会计章节和分类账概念进行针对性训练。',
    start: '开始',

    // Question
    qNumber: '第3题 / 共10题',
    qText: '向A公司销售商品￥500,000，货款尚未结清。',
    qInstruction: '请针对上述交易进行适当的会计分录。',
    debit: '借方',
    credit: '贷方',
    accountTitle: '会计科目',
    amount: '金额',
    addRow: '添加行',
    submit: '提交',

    // Result
    correct: '回答正确',
    qLabel: '第4题 分录题',
    modelAnswer: '标准答案',
    explanation: '题目解析',
    explanationText: '作为商品销售货款收到的期票，应记入“应收票据”科目（资产）的增加，登记在借方。同时，因为收回了货款，所以记入“应收账款”科目（资产）的减少，登记在贷方。',
    commonMistake: '常见错误：请注意不要将借方和贷方的会计科目写反。',
    nextQuestion: '下一题',

    // History
    learningHistory: '学习历史',
    historyDesc: '回顾你过去的学习记录，追踪你的进度。',
    recentActivity: '近期活动',
    score: '得分',
    date: '日期',

    // Settings
    settingsDesc: '管理您的应用程序偏好和帐户设置。',
    languageSettings: '语言设置',
    selectLanguage: '选择语言',
    account: '账户',
    logout: '退出登录',
    notifications: '通知',
    pushNotifications: '推送通知',
  }
};
