// 在属性名前面加上下划线，和文本内容做出区别。
// {} 表示需要进行替换的部分
// <br> 和 \n 换行
type langTextKeys = keyof typeof langText

const langText = {
  _或者: [' 或者 ', ' または ', ' or ', ' 或是 '],
  _并且: [' 并且 ', ' かつ ', ' and ', ' 並且 '],
  _任务开始0: ['任务开始', 'タスクの開始', 'Task starts', '工作開始'],
  _抓取结果为零: [
    '抓取完毕，但没有找到符合筛选条件的文件。',
    'フィルタ条件で検索しましたが、該当するファイルは見つかりませんでした。',
    'Crawl finished but did not find files that match the filter criteria.',
    '擷取完畢，但沒有找到符合篩選條件的檔案。',
  ],
  _当前任务尚未完成2: [
    '当前任务尚未完成，请等待完成后再下载。',
    '現在のタスクはまだ完了していません。完了するまでお待ちください。',
    'The current task has not yet been completed',
    '目前工作尚未完成，請等待完成後再下載。',
  ],
  _关闭: ['关闭', '閉じる', 'close', '關閉'],
  _输出信息: ['输出信息', '出力情報', 'Output information', '輸出資訊'],
  _复制: ['复制', 'コピー', 'Copy', '複製'],
  _已复制到剪贴板: [
    '已复制到剪贴板，可直接粘贴',
    'クリップボードにコピーしました。',
    'Has been copied to the clipboard',
    '已複製至剪貼簿，可直接貼上',
  ],
  _下载设置: ['下载设置', 'ダウンロード設定', 'Download settings', '下載設定'],
  _收起展开设置项: [
    '收起/展开设置项',
    '設定の折りたたみ/展開',
    'Collapse/expand settings',
    '摺疊/展開設定項目',
  ],
  _github: [
    'Github 页面，欢迎 star',
    'Github のページ、star をクリックしてください。',
    'Github page, if you like, please star it',
    'Github 頁面，歡迎 star',
  ],
  _wiki: ['使用手册', 'マニュアル', 'Wiki', 'Wiki'],
  _抓取: ['抓取', '保存', 'Crawl', '擷取'],
  _下载: ['下载', 'ダウンロード', 'Download', '下載'],
  _其他: ['其他', 'その他', 'Other', '其他'],
  _快捷键切换显示隐藏: [
    '使用 Alt + X，可以显示和隐藏下载面板',
    'Alt + X でダウンロードパネルを表示/非表示にできます。',
    'Use Alt + X to show and hide the download panel',
    '使用 Alt + X，可以顯示和隱藏下載面板',
  ],
  _共抓取到n个文件: [
    '共抓取到 {} 个文件',
    '合計 {} 個のファイルを取得しました。',
    'Crawl a total of {} files',
    '共擷取到 {} 個檔案',
  ],
  _设置文件名: [
    '设置命名规则',
    '命名規則の設定',
    'Set naming rules',
    '設定命名規則',
  ],
  _设置文件夹名的提示: [
    `可以使用 '/' 建立文件夹<br>示例：{user}/{title}/{index}`,
    `フォルダーは '/' で作成できます。<br>例：{user}/{title}/{index}`,
    `You can create a directory with '/'<br>Example：{user}/{title}/{index}`,
    `可以使用 '/' 建立資料夾<br>範例：{user}/{title}/{index}`,
  ],
  _命名标记user: ['画师名字', 'ユーザー名', 'Artist name', '畫師名稱'],
  _命名标记uid: ['画师 id', 'ユーザーID', 'Artist id', '畫師 id'],
  _预览文件名: [
    '预览文件名',
    'ファイル名のプレビュー',
    'Preview file name',
    '預覽檔案名稱',
  ],
  _设置下载线程: [
    '设置下载线程',
    '同時ダウンロード数の設定',
    'Set the download thread',
    '設定下載執行緒',
  ],
  _线程数字: [
    '可以输入 1-10 之间的数字，设置同时下载的数量',
    '同時にダウンロードするファイルの数を 1-10 で設定します。',
    'You can type a number between 1-10 to set the number of concurrent downloads',
    '可以輸入 1-10 之間的數字，設定同時下載的數量',
  ],
  _下载按钮1: ['开始下载', 'ダウンロードを開始', 'start download', '開始下載'],
  _下载按钮2: [
    '暂停下载',
    'ダウンロードを一時停止',
    'pause download',
    '暫停下載',
  ],
  _下载按钮3: ['停止下载', 'ダウンロードを停止', 'stop download', '停止下載'],
  _下载按钮4: ['复制 url', 'URLをコピー', 'copy urls', '複製url'],
  _当前状态: ['当前状态 ', '現在の状態 ', 'Now state ', '目前狀態 '],
  _未开始下载: [
    '未开始下载',
    'まだダウンロードを開始していません。',
    'Not yet started downloading',
    '未開始下載',
  ],
  _下载进度: [
    '下载进度：',
    'ダウンロードの進行状況：',
    'Download progress: ',
    '下載進度：',
  ],
  _下载线程: ['下载线程：', 'スレッド：', 'Thread: ', '下載執行緒：'],
  _常见问题: ['常见问题', 'よくある質問', 'Common problems', '常見問題'],
  _uuid: [
    '如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。',
    'ダウンロード後のファイル名が異常な場合、ダウンロード機能を持つ他のブラウザ拡張機能を無効にしてください。',
    'If the file name after downloading is abnormal, disable other browser extensions that have download capabilities.',
    '如果下載後的檔案名稱異常，請停用其他有下載功能的瀏覽器擴充功能。',
  ],
  _下载说明: [
    "下载的文件保存在浏览器的下载目录里。<br>请不要在浏览器的下载选项里选中'总是询问每个文件的保存位置'。<br><b>如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。</b><br>QQ群：853021998",
    'ダウンロードしたファイルは、ブラウザのダウンロードディレクトリに保存されます。<br><b>ダウンロード後のファイル名が異常な場合は、ダウンロード機能を持つ他のブラウザ拡張機能を無効にしてください。</b>',
    'The downloaded file is saved in the browser`s download directory. <br><b>If the file name after downloading is abnormal, disable other browser extensions that have download capabilities.</b>',
    '下載的檔案儲存在瀏覽器的下載目錄裡。<br>請不要在瀏覽器的下載選項裡選取「下載每個檔案前先詢問儲存位置」。<br><b>如果下載後的檔案名稱異常，請停用其他有下載功能的瀏覽器擴充功能。</b><br>QQ群：853021998',
  ],
  _正在下载中: ['正在下载中', 'ダウンロード中', 'Downloading', '正在下載'],
  _下载完毕: [
    '√ 下载完毕!',
    '√ ダウンロードが完了しました！',
    '√ Download finished',
    '√ 下載完畢!',
  ],
  _已暂停: [
    '下载已暂停',
    'ダウンロードを一時停止中です。',
    'Download is paused',
    '下載已暫停',
  ],
  _已停止: [
    '下载已停止',
    'ダウンロードを停止しました。',
    'Download stopped',
    '下載已停止',
  ],
  _已下载: ['已下载', 'downloaded', 'downloaded', '已下載'],
  _抓取完毕: [
    '抓取完毕！',
    'ダウンロードが完了しました！',
    'Crawl finished!',
    '擷取完畢！',
  ],
  _快速下载本页: [
    '快速下载',
    'この作品をすばやくダウンロードする',
    '快速下載',
    'Download quickly',
  ],
  _自动开始下载: [
    '自动开始下载',
    'ダウンロードを自動で開始',
    'Download starts automatically',
    '自動開始下載',
  ],
  _自动下载的提示: [
    '当“开始下载”状态可用时，自动开始下载，不需要点击下载按钮。',
    '「ダウンロードを開始する」ステータスが有効になると、ダウンロードが自動的に開始され、ダウンロードボタンをクリックする必要がなくなります。',
    'When the &quot;Start Downloa&quot; status is available, the download starts automatically and no need to click the download button.',
    '當可下載時自動開始下載，不需要點選下載按鈕。',
  ],

  _文件下载失败: [
    '文件 {} 下载失败',
    'ファイル {} のダウンロードに失敗しました。',
    'File {} download failed',
    '檔案 {} 下載失败',
  ],
  _重置设置: ['重置设置', '設定リセット', 'Reset Settings', '重設設定'],
  _是否重置设置: [
    '是否重置设置？',
    '設定をリセットしますか？',
    'Do you want to reset the settings?',
    '是否重設設定？',
  ],
  _设置id范围: [
    '设置 id 范围',
    '投稿IDの範囲を設定',
    'Set id range',
    '設定 id 範圍',
  ],
  _设置id范围提示: [
    '您可以输入一个投稿 id，抓取比它新或者比它旧的投稿',
    '1つの投稿IDを入力することで、それより新しいあるいは古い投稿をまとめてダウンロードすることができます。',
    'You can enter a work id and crawl articles that are newer or older than it',
    '您可以輸入一個投稿 id，擷取比它新或者比它舊的投稿。',
  ],
  _大于: ['大于', 'より新しい', 'Bigger than', '大於'],
  _小于: ['小于', 'より古い', 'Less than', '小於'],
  _设置投稿时间: [
    '设置投稿时间',
    '投稿日時の設定',
    'Set posting date',
    '設定投稿時間',
  ],
  _设置投稿时间提示: [
    '您可以下载指定时间内发布的投稿',
    '指定期間内の投稿をまとめてダウンロードできます。',
    'You can download articles published within a specified time',
    '您可以下載指定時間内發佈的投稿',
  ],
  _没有数据可供使用: [
    '没有数据可供使用',
    '該当するデータはありません。',
    'No data is available.',
    '沒有資料可供使用',
  ],
  _命名规则: ['命名规则', '命名規則', 'Naming rule', '命名規則'],
  _最小值: ['最小值', '最小値', 'Minimum value', '最小值'],
  _最大值: ['最大值', '最大値', 'maximum value', '最大值'],
  _文件类型: ['文件类型', 'ファイルタイプ', 'File type', '檔案類型'],
  _图片: ['图片', '画像', 'Image', '圖片'],
  _视频: ['视频', '映像', 'Video', '影片'],
  _音乐: ['音频', '音声', 'Audio', '音訊'],
  _压缩文件: ['压缩文件', '圧縮ファイル', 'Compressed file', '壓縮檔'],
  _PS文件: ['源文件', 'ソースファイル', 'Source File', '原始檔'],
  _投稿类型: ['投稿类型', '投稿タイプ', 'Article type', '投稿類型'],
  _免费投稿: ['免费投稿', '無料投稿', 'Free article', '免費投稿'],
  _付费投稿: ['付费投稿', '有償投稿', 'Paid article', '付費投稿'],
  _设置价格范围: [
    '设置价格范围',
    '価格帯を設定',
    'Set price range',
    '設定價格範圍',
  ],
  _保存投稿中的外部链接: [
    '保存投稿中的外部链接',
    '本文中の外部リンクを保存',
    'Save external links in the articles',
    '儲存投稿中的外部連結',
  ],
  _保存投稿中的文字: [
    '保存投稿中的文字',
    '投稿の本文を保存',
    'Save the text in the articles',
    '儲存投稿中的文字',
  ],
  _抓取文件数量: [
    '已获取 {} 个文件',
    '{} 個のファイルを取得',
    '{} Files acquired',
    '已取得 {} 個檔案',
  ],
  _早于: ['早于', 'より前', 'Earlier than', '早於'],
  _晚于: ['晚于', 'より後', 'Later than', '晚於'],
  _抓取赞助的所有用户的投稿: [
    '抓取赞助的所有用户的投稿',
    '支援中のユーザーの投稿をまとめて保存',
    'Crawl all sponsored articles',
    '擷取所有贊助用戶的投稿',
  ],
  _抓取该用户的投稿: [
    '抓取该用户的投稿',
    'このユーザーの投稿をまとめて保存',
    "Crawl this user's articles",
    '擷取該用戶的投稿',
  ],
  _抓取该tag的投稿: [
    '抓取该 tag 的投稿',
    'このタグの投稿をまとめて保存',
    'Crawl articles with this tag',
    '擷取該 tag 的投稿',
  ],
  _抓取这篇投稿: [
    '抓取这篇投稿',
    'この投稿を保存',
    'Crawl this article',
    '擷取這篇投稿',
  ],
  _抓取商品的封面图: [
    '抓取商品的封面图',
    '投稿の表紙画像を保存',
    'Crawl the cover image of the product',
    '擷取商品的封面圖',
  ],
  _命名标记postid: ['投稿 id', '投稿ID', 'Article id', '投稿 id'],
  _命名标记title: ['投稿标题', '投稿のタイトル', 'Article title', '投稿標題'],
  _命名标记tags: [
    '投稿的 tag 列表（可能为空）',
    '投稿のタグリスト（空の場合があります）',
    "Article's tag list (may be empty)",
    '投稿的 tag 列表（可能為空）',
  ],
  _命名标记date: [
    '投稿的发布日期，如 2019-08-29 12-30',
    '投稿日など，例 2019-08-29 12-30',
    'The publication date of the article, such as 2019-08-29 12-30',
    '投稿的發布日期，如 2019-08-29 12-30',
  ],
  _命名标记fee: ['投稿的价格', '支援額', 'Article price', '投稿的價格'],
  _命名标记index: [
    '文件在它所属的投稿里的序号',
    '投稿内のファイルの連番',
    'The serial number of the file in the article it belongs to',
    '檔案在它所屬的投稿裡的序號',
  ],
  _命名标记name: [
    '文件在投稿里的文件名',
    '投稿内のファイル名',
    'File name in the article',
    '檔案在投稿裡的名稱',
  ],
  _命名标记ext: [
    '文件的扩展名',
    'ファイルの拡張子',
    'File extension',
    '檔案的副檔名',
  ],
  _命名标记提醒: [
    '您可以使用多个标记；建议在不同标记之间添加分割用的字符。示例：{title}-{postid}<br>建议在命名规则中包含 {postid} 和 {index}，防止文件名重复。',
    '複数のタグを使用できます。異なるタグを区切るために文字を追加することを推奨します。 例：{title}-{postid} <br>ファイル名の重複を防ぐために、命名規則に{postid}と{index}を含めることを推奨します。',
    'You can use multiple tags; it is recommended to add characters to separate between different tags. Example: {title}-{postid} <br> It is recommended to include {postid} and {index} in the naming rules to prevent duplicate file names.',
    '您可以使用多個標記；建議在不同標記之間加入分隔用的字元。範例：{title}-{postid}<br>建議在命名規則中包含 {postid} 和 {index}，防止檔名重複。',
  ],
  _日期格式: [
    '日期和时间格式',
    '日時の書式',
    'Date and time format',
    '日期和時間格式',
  ],
  _日期格式提示: [
    '你可以使用以下标记来设置日期和时间格式。这会影响命名规则里的 {date} 和 {task_date}。<br>对于时间如 2021-04-30T06:40:08',
    '以下のタグを使用して日時の書式を設定できます。 これは命名規則の {date} と {task_date} に影響します。 <br> 例：2021-04-30T06:40:08',
    'You can use the following notation to set the date and time format. This will affect {date} and {task_date} in the naming rules. <br>For time such as 2021-04-30T06:40:08',
    '你可以使用以下標記來設定日期和時間格式。這會影響命名規則裡的 {date} 和 {task_date}。<br>對於資料如：2021-04-30T06:40:08。',
  ],
  _命名标记taskDate: [
    '本次任务抓取完成时的时间。例如：2020-10-21',
    'タスクを完了した日時です。 例：2020-10-21',
    'The time when the task was crawl completed. For example: 2020-10-21',
    '本次工作擷取完成時的時間。例如：2020-10-21。',
  ],
  _提示: ['提示', 'ヒント', 'tip', '提示'],
  _保存投稿中的封面图片: [
    '保存投稿中的封面图片',
    '投稿の表紙画像を保存',
    'Save the cover image in the articles',
    '儲存投稿中的封面圖片',
  ],
  _列表页抓取完成: [
    '列表页面抓取完成',
    'リストページがクロールされ',
    'The list page is crawled',
    '清單頁面擷取完成',
  ],
  _当前作品个数: [
    '当前有 {} 个投稿 ',
    '今は　{}　枚の投稿があります ',
    'There are now {} posts',
    '目前有 {} 個投稿 ',
  ],
  _开始获取作品信息: [
    '开始获取投稿信息',
    '投稿情報の取得を開始します',
    'Start getting post data',
    '開始取得投稿資訊',
  ],
  _待处理: ['待处理', '処理待ち', 'Pending', '待處理'],
  _共抓取到n个作品: [
    '共抓取到 {} 个投稿',
    '合計 {} つの投稿があります',
    'Crawl a total of {} posts',
    '共擷取到 {} 個投稿',
  ],
  _最近更新: ['最近更新', '最近更新する', 'What`s new', '最近更新'],
  _我知道了: ['我知道了', '分かりました', 'OK', '我知道了'],
}

export { langText, langTextKeys }
