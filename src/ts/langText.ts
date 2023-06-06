// 储存下载器使用的多语言文本
// 在属性名前面加上下划线，和文本内容做出区别
// {} 是占位符
// <br> 是换行

const langText = {
  _开始抓取: [
    '开始抓取',
    '開始抓取',
    'start crawling',
    'クロールを開始する',
    '크롤링 시작',
  ],
  _或者: [' 或者 ', ' 或是 ', ' or ', ' または ', ' 또는 '],
  _并且: [' 并且 ', ' 並且 ', ' and ', ' かつ ', ' 그리고 '],
  _任务开始: [
    '任务开始',
    '工作開始',
    'Task starts',
    'タスクの開始',
    '작업 시작',
  ],
  _抓取结果为零: [
    '抓取完毕，但没有找到符合筛选条件的文件。',
    '擷取完畢，但沒有找到符合篩選條件的檔案。',
    'Crawl finished but did not find files that match the filter criteria.',
    'フィルタ条件で検索しましたが、該当するファイルは見つかりませんでした。',
    '긁어오기가 완료되었지만 필터 조건과 일치하는 파일을 찾지 못했습니다.',
  ],
  _当前任务尚未完成: [
    '当前任务尚未完成',
    '目前工作尚未完成',
    'The current task has not yet been completed',
    '現在の作業はまだ完了していません',
    '현재 작업이 아직 완료되지 않았습니다',
  ],
  _当前任务尚未完成2: [
    '当前任务尚未完成，请等待完成后再下载。',
    '目前工作尚未完成，請等待完成後再下載。',
    'The current task has not yet been completed',
    '現在のタスクはまだ完了していません。完了するまでお待ちください。',
    '현재 작업이 아직 완료되지 않았습니다.',
  ],
  _关闭: ['关闭', '關閉', 'close', '閉じる', '닫기'],
  _输出信息: [
    '输出信息',
    '輸出資訊',
    'Output information',
    '出力情報',
    '출력 정보',
  ],
  _复制: ['复制', '複製', 'Copy', 'コピー', '복사'],
  _已复制到剪贴板: [
    '已复制到剪贴板，可直接粘贴',
    '已複製至剪貼簿，可直接貼上',
    'Has been copied to the clipboard',
    'クリップボードにコピーしました。',
    '클립보드에 복사되었습니다.',
  ],
  _下载设置: [
    '下载设置',
    '下載設定',
    'Download settings',
    'ダウンロード設定',
    '다운로드 설정',
  ],
  _收起展开设置项: [
    '收起/展开设置项',
    '摺疊/展開設定項目',
    'Collapse/expand settings',
    '設定の折りたたみ/展開',
    '설정 축소/확장',
  ],
  _github: [
    'Github 页面，欢迎 star',
    'Github 頁面，歡迎 star',
    'Github page, if you like, please star it',
    'Github のページ、star をクリックしてください。',
    'Github, 유용하셨다면 Star를 주세요.',
  ],
  _pixivDownloader: [
    'Pixiv 下载器',
    'Pixiv 下載器',
    'Pixiv Downloader',
    'Pixiv ダウンロード',
    'Pixiv 다운로더',
  ],
  _抓取: ['抓取', '擷取', 'Crawl', '保存', '긁어오기'],
  _下载: ['下载', '下載', 'Download', 'ダウンロード', '다운로드'],
  _其他: ['其他', '其他', 'Other', 'その他', '그 외'],
  _快捷键切换显示隐藏: [
    '使用 Alt + X，可以显示和隐藏下载面板',
    '使用 Alt + X，可以顯示和隱藏下載面板',
    'Use Alt + X to show and hide the download panel',
    'Alt + X でダウンロードパネルを表示/非表示にできます。',
    'Alt + X를 사용하여 다운로드 패널 보이기 및 숨기기',
  ],
  _共抓取到n个文件: [
    '共抓取到 {} 个文件',
    '共擷取到 {} 個檔案',
    'Crawl a total of {} files',
    '合計 {} 個のファイルを取得しました。',
    '총 {}개의 파일 긁어오기',
  ],
  _命名规则: [
    ' <span class="key">命名</span>规则',
    '<span class="key">命名</span>規則',
    '<span class="key">Naming</span> rule',
    '<span class="key">命名</span>規則',
    '<span class="key">명명</span> 규칙',
  ],
  _设置文件夹名的提示: [
    `可以使用 '<span class="key">/</span>' 建立文件夹。示例：`,
    `可以使用斜線（<span class="key">/</span>）建立資料夾。範例：`,
    `You can create a directory with '<span class="key">/</span>'. Example：`,
    `フォルダーは '<span class="key">/</span>' で作成できます。例：`,
    `'<span class="key">/</span>'을 사용하여 디렉토리를 생성할 수 있습니다.<br>예:`,
  ],
  _命名标记user: [
    '画师名字',
    '畫師名稱',
    'Artist name',
    'ユーザー名',
    '아티스트명',
  ],
  _命名标记create_id: [
    '画师的创作者 ID（英文名或罗马字）',
    '畫師的創作者 ID（英文名或羅馬字）',
    `Artist's Creator ID (English or Romaji)`,
    'アーティストのクリエイター ID (英語またはローマ字)',
    '아티스트 크리에이터 ID(영어 또는 로마자)',
  ],
  _命名标记uid: [
    '画师 ID（数字）',
    '畫師 ID（數字）',
    'Artist ID (number)',
    'ユーザーID（数字）',
    '아티스트 ID(숫자)',
  ],
  _预览文件名: [
    '预览文件名',
    '預覽檔案名稱',
    'Preview file name',
    'ファイル名',
    '파일명 미리보기',
  ],
  _下载线程: [
    '下载<span class="key">线程</span>',
    '下載<span class="key">執行緒</span>',
    'Download <span class="key">thread</span>',
    '同時ダウンロード数',
    '다운로드 <span class="key">쓰레드</span>',
  ],
  _线程数字: [
    '可以输入 1-6 之间的数字，设置同时下载的数量',
    '可以輸入 1-6 之間的數字，設定同時下載的數量',
    'You can type a number between 1-6 to set the number of concurrent downloads',
    '同時にダウンロードするファイルの数を 1-6 で設定します。',
    '1-6 사이의 숫자를 입력하여 동시 다운로드 수를 설정할 수 있습니다.',
  ],
  _下载按钮1: [
    '开始下载',
    '開始下載',
    'start download',
    'ダウンロードを開始',
    '다운로드 시작',
  ],
  _下载按钮2: [
    '暂停下载',
    '暫停下載',
    'pause download',
    'ダウンロードを一時停止',
    '다운로드 일시중지',
  ],
  _下载按钮3: [
    '停止下载',
    '停止下載',
    'stop download',
    'ダウンロードを停止',
    '다운로드 정지',
  ],
  _下载按钮4: ['复制 url', '複製url', 'copy urls', 'URLをコピー', 'URL 복사'],
  _当前状态: [
    '当前状态 ',
    '目前狀態 ',
    'Now state ',
    '現在の状態 ',
    '현재 상태 ',
  ],
  _未开始下载: [
    '未开始下载',
    '未開始下載',
    'Not yet started downloading',
    'まだダウンロードを開始していません。',
    '아직 다운로드를 시작하지 않았습니다.',
  ],
  _常见问题: [
    '常见问题',
    '常見問題',
    'Common problems',
    'よくある質問',
    '자주 묻는 질문',
  ],
  _uuid: [
    '如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。',
    '如果下載後的檔案名稱異常，請停用其他有下載功能的瀏覽器擴充功能。',
    'If the file name after downloading is abnormal, disable other browser extensions that have download capabilities.',
    'ダウンロード後のファイル名が異常な場合、ダウンロード機能を持つ他のブラウザ拡張機能を無効にしてください。',
    '다운로드 후 파일명이 이상할 경우 다운로드 기능이 있는 다른 브라우저 확장 프로그램을 비활성화해주세요.',
  ],
  _下载说明: [
    "下载的文件保存在浏览器的下载目录里。<br>请不要在浏览器的下载选项里选中'总是询问每个文件的保存位置'。<br><b>如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。</b><br>QQ群：853021998",
    '下載的檔案儲存在瀏覽器的下載目錄裡。<br>請不要在瀏覽器的下載選項裡選取「下載每個檔案前先詢問儲存位置」。<br><b>如果下載後的檔案名稱異常，請停用其他有下載功能的瀏覽器擴充功能。</b><br>QQ群：853021998',
    'The downloaded file is saved in the browser`s download directory. <br><b>If the file name after downloading is abnormal, disable other browser extensions that have download capabilities.</b>',
    'ダウンロードしたファイルは、ブラウザのダウンロードディレクトリに保存されます。<br><b>ダウンロード後のファイル名が異常な場合は、ダウンロード機能を持つ他のブラウザ拡張機能を無効にしてください。</b>',
    '다운로드한 파일은 브라우저의 다운로드 디렉토리에 저장됩니다. <br><b>다운로드 후 파일명이 비정상인 경우 다운로드 기능이 있는 다른 브라우저 확장 프로그램을 비활성화해주세요.</b>',
  ],
  _正在下载中: [
    '正在下载中',
    '正在下載',
    'Downloading',
    'ダウンロード中',
    '다운로드 중',
  ],
  _下载完毕: [
    '√ 下载完毕!',
    '√ 下載完畢!',
    '√ Download finished!',
    '√ ダウンロードが完了しました！',
    '√ 다운로드 완료!',
  ],
  _已暂停: [
    '下载已暂停',
    '下載已暫停',
    'Download is paused',
    'ダウンロードを一時停止中です。',
    '다운로드 일시중지',
  ],
  _已停止: [
    '下载已停止',
    '下載已停止',
    'Download stopped',
    'ダウンロードを停止しました。',
    '다운로드 정지',
  ],
  _已下载: ['已下载', '已下載', 'downloaded', 'ダウンロードした', '다운로드됨'],
  _抓取完毕: [
    '抓取完毕！',
    '擷取完畢！',
    'Crawl finished!',
    'クロールが完了しました！',
    '긁어오기 완료!',
  ],
  _自动开始下载: [
    '<span class="key">自动</span>开始下载',
    '<span class="key">自動</span>開始下載',
    'Download starts <span class="key">automatically</span>',
    'ダウンロードは自動的に開始されます',
    '<span class="key">자동으로</span> 다운로드 시작',
  ],
  _自动下载的提示: [
    '当“开始下载”状态可用时，自动开始下载，不需要点击下载按钮。',
    '當可下載時自動開始下載，不需要點選下載按鈕。',
    'When the &quot;Start Download&quot; status is available, the download starts automatically and no need to click the download button.',
    '「ダウンロードを開始する」ステータスが有効になると、ダウンロードが自動的に開始され、ダウンロードボタンをクリックする必要がなくなります。',
    '&quot;다운로드 시작&quot; 상태가 활성화되면, 다운로드가 자동으로 시작되고 다운로드 시작 버튼을 클릭할 필요가 없게 됩니다.',
  ],
  _文件下载失败: [
    '文件 {} 下载失败',
    '檔案 {} 下載失败',
    'File {} download failed',
    'ファイル {} のダウンロードに失敗しました。',
    '{} 파일 다운로드 실패',
  ],
  _是否重置设置: [
    '是否重置设置？',
    '是否重設設定？',
    'Do you want to reset the settings?',
    '設定をリセットしますか？',
    '설정을 초기화하시겠습니까?',
  ],
  _id范围: [
    '<span class="key">ID</span> 范围',
    '<span class="key">ID</span> 範圍',
    '<span class="key">ID</span> range',
    '<span class="key">ID</span>の範囲',
    '<span class="key">ID</span> 범위',
  ],
  _设置id范围提示: [
    '您可以输入一个投稿 id，抓取比它新或者比它旧的投稿',
    '您可以輸入一個投稿 id，擷取比它新或者比它舊的投稿。',
    'You can enter a work id and crawl posts that are newer or older than it',
    '1つの投稿IDを入力することで、それより新しいあるいは古い投稿をまとめてダウンロードすることができます。',
    '1개의 게시물 ID를 입력하면 그보다 새로운 혹은 오래된 게시물을 일괄 다운로드 받을 수 있습니다.',
  ],
  _大于: ['大于', '大於', 'Bigger than', 'より新しい', '보다 큼'],
  _小于: ['小于', '小於', 'Less than', 'より古い', '보다 작음'],
  _投稿时间: [
    '投稿<span class="key">时间</span>',
    '投稿<span class="key">時間</span>',
    'Posting <span class="key">date</span>',
    '投稿<span class="key">日時</span>',
    '투고 <span class="key">날짜</span>',
  ],
  _设置投稿时间提示: [
    '您可以下载指定时间内发布的投稿',
    '您可以下載指定時間内發佈的投稿',
    'You can download posts published within a specified time',
    '指定期間内の投稿をまとめてダウンロードできます。',
    '지정된 기간 내에 게시물을 다운로드할 수 있습니다.',
  ],
  _没有数据可供使用: [
    '没有数据可供使用',
    '沒有資料可供使用',
    'No data is available.',
    '該当するデータはありません。',
    '사용 가능한 데이터가 없습니다.',
  ],
  _最小值: ['最小值', '最小值', 'Minimum value', '最小値', '최소'],
  _最大值: ['最大值', '最大值', 'maximum value', '最大値', '최대'],
  _文件类型: [
    '<span class="key">文件</span>类型',
    '<span class="key">檔案</span>類型',
    '<span class="key">File</span> type',
    '<span class="key">ファイル</span>タイプ',
    '<span class="key">파일</span> 유형',
  ],
  _图片: ['图片', '圖片', 'Image', '画像', '이미지'],
  _视频: ['视频', '影片', 'Video', '映像', '동영상'],
  _音乐: ['音频', '音訊', 'Audio', '音声', '오디오'],
  _压缩文件: [
    '压缩文件',
    '壓縮檔',
    'Compressed file',
    '圧縮ファイル',
    '압축된 파일',
  ],
  _PS文件: ['源文件', '原始檔', 'Source File', 'ソースファイル', '소스 파일'],
  _费用类型: [
    '<span class="key">费用</span>类型',
    '<span class="key">費用</span>型別',
    '<span class="key">Fee</span> type',
    '<span class="key">料金</span>タイプ',
    '<span class="key">수수료</span> 유형',
  ],
  _免费投稿: ['免费投稿', '免費投稿', 'Free post', '無料投稿', '무료 게시물'],
  _付费投稿: ['付费投稿', '付費投稿', 'Paid post', '有償投稿', '유료 게시물'],
  _价格范围: [
    '<span class="key">价格</span>范围',
    '<span class="key">價格</span>範圍',
    '<span class="key">Price</span> range',
    '<span class="key">価格</span>帯',
    '<span class="key">가격</span> 범위',
  ],
  _保存投稿中的外部链接: [
    '保存投稿中的外部<span class="key">链接</span>',
    '儲存投稿中的外部<span class="key">連結</span>',
    'Save external <span class="key">links</span> in the posts',
    '本文中の外部<span class="key">リンク</span>を保存',
    '게시물의 외부 <span class="key">링크</span> 저장',
  ],
  _保存投稿中的文字: [
    '保存投稿中的<span class="key">文字</span>',
    '儲存投稿中的<span class="key">文字</span>',
    'Save the <span class="key">text</span> in the posts',
    '投稿の<span class="key">本文</span>を保存',
    '게시물의 <span class="key">본문</span> 저장',
  ],
  _抓取文件数量: [
    '已获取 {} 个文件',
    '已取得 {} 個檔案',
    '{} Files acquired',
    '{} 個のファイルを取得',
    '{}개의 파일을 획득하였습니다',
  ],
  _早于: ['早于', '早於', 'Earlier than', 'より前', '보다 이전'],
  _晚于: ['晚于', '晚於', 'Later than', 'より後', '보다 이후'],
  _抓取赞助的所有用户的投稿: [
    '抓取赞助的所有用户的投稿',
    '擷取所有贊助用戶的投稿',
    'Crawl all sponsored posts',
    '支援中のユーザーの投稿をまとめて保存',
    '지원 중인 모든 크리에이터의 게시물 긁어오기',
  ],
  _抓取该用户的投稿: [
    '抓取该用户的投稿',
    '擷取該用戶的投稿',
    "Crawl this user's posts",
    'このユーザーの投稿をまとめて保存',
    '이 크리에이터의 게시물 긁어오기',
  ],
  _抓取该tag的投稿: [
    '抓取该 tag 的投稿',
    '擷取該 tag 的投稿',
    'Crawl posts with this tag',
    'このタグの投稿をまとめて保存',
    '이 태그를 사용하여 게시물 긁어오기',
  ],
  _抓取这篇投稿: [
    '抓取这篇投稿',
    '擷取這篇投稿',
    'Crawl this post',
    'この投稿を保存',
    '이 게시물을 긁어오기',
  ],
  _抓取商品的封面图: [
    '抓取商品的封面图',
    '擷取商品的封面圖',
    'Crawl the cover image of the product',
    '投稿の表紙画像を保存',
    '게시물의 표지 이미지를 긁어오기',
  ],
  _命名标记postid: ['投稿 ID', '投稿 ID', 'Post ID', '投稿ID', '게시물 ID'],
  _命名标记title: [
    '投稿标题',
    '投稿標題',
    'Post title',
    '投稿のタイトル',
    '게시물 제목',
  ],
  _命名标记tags: [
    '投稿的 tag 列表（可能为空）',
    '投稿的 tag 列表（可能為空）',
    "Post's tag list (may be empty)",
    '投稿のタグリスト（空の場合があります）',
    '게시물의 태그 목록 (비어있을 수 있음)',
  ],
  _命名标记date: [
    '投稿的发布日期，如 2019-08-29',
    '投稿的發布日期，如 2019-08-29',
    'The publication date of the post, such as 2019-08-29',
    '投稿日など，例 2019-08-29',
    '게시물의 투고일. 예: 2019-08-29',
  ],
  _命名标记fee: [
    '投稿的价格',
    '投稿的價格',
    'Post price',
    '支援額',
    '게시물 가격',
  ],
  _命名标记index: [
    '文件在它所属的投稿里的序号',
    '檔案在它所屬的投稿裡的序號',
    'The serial number of the file in the post it belongs to',
    '投稿内のファイルの連番',
    '게시물의 파일 일련번호',
  ],
  _命名标记name: [
    '文件在投稿里的文件名',
    '檔案在投稿裡的名稱',
    'File name in the post',
    '投稿内のファイル名',
    '게시물의 파일명',
  ],
  _命名标记ext: [
    '文件的扩展名',
    '檔案的副檔名',
    'File extension',
    'ファイルの拡張子',
    '파일 확장자',
  ],
  _命名标记提醒: [
    '您可以使用多个标记；建议在不同标记之间添加分割用的字符。示例：{postid}-{title}<br>建议在命名规则中包含 {postid} 和 {index}，防止文件名重复。',
    '您可以使用多個標記；建議在不同標記之間加入分隔用的字元。範例：{postid}-{title}<br>建議在命名規則中包含 {postid} 和 {index}，防止檔名重複。',
    'You can use multiple tags; it is recommended to add characters to separate between different tags. Example: {postid}-{title} <br> It is recommended to include {postid} and {index} in the naming rules to prevent duplicate file names.',
    '複数のタグを使用できます。異なるタグを区切るために文字を追加することを推奨します。 例：{postid}-{title} <br>ファイル名の重複を防ぐために、命名規則に{postid}と{index}を含めることを推奨します。',
    '여러 태그를 사용할 수 있습니다. 서로 다른 태그 사이에 구분자를 넣는 것을 권장합니다.<br>예: {title}-{postid}<br>파일명이 중복되지 않도록 명명 규칙에 {postid}와 {index}를 포함할 것을 권장합니다.',
  ],
  _日期格式: [
    '日期和时间<span class="key">格式</span>',
    '日期和時間<span class="key">格式</span>',
    'Date and time <span class="key">format</span>',
    '日付と時刻の書式',
    '날짜 및 시간 <span class="key">형식</span>',
  ],
  _日期格式提示: [
    '你可以使用以下标记来设置日期和时间格式。这会影响命名规则里的 {date} 和 {task_date}。<br>对于时间如 2021-04-30T06:40:08',
    '你可以使用以下標記來設定日期和時間格式。這會影響命名規則裡的 {date} 和 {task_date}。<br>對於資料如：2021-04-30T06:40:08。',
    'You can use the following notation to set the date and time format. This will affect {date} and {task_date} in the naming rules. <br>For time such as 2021-04-30T06:40:08',
    '以下のタグを使用して日時の書式を設定できます。 これは命名規則の {date} と {task_date} に影響します。 <br> 例：2021-04-30T06:40:08',
    '아래 태그를 사용하여 날짜 형식을 설정할 수 있습니다.<br>이것은 명명 규칙의 {date}와 {task_date}에 영향을 미칩니다.<br>예: 2021-04-30T 06:40:08',
  ],
  _命名标记taskDate: [
    '本次任务抓取完成时的时间。例如：2020-10-21',
    '本次工作擷取完成時的時間。例如：2020-10-21。',
    'The time when the task was crawl completed. For example: 2020-10-21',
    'タスクを完了した日時です。 例：2020-10-21',
    '긁어오기 작업 완료 날짜. 예: 2020-10-21',
  ],
  _提示: ['提示', '提示', 'tip', 'ヒント', '팁'],
  _保存投稿中的封面图片: [
    '保存投稿中的<span class="key">封面</span>图片',
    '儲存投稿中的<span class="key">封面</span>圖片',
    'Save the <span class="key">cover</span> image in the posts',
    '投稿の<span class="key">表紙</span>画像を保存',
    '게시물의 <span class="key">표지</span> 이미지 저장',
  ],
  _列表页抓取完成: [
    '列表页面抓取完成',
    '清單頁面擷取完成',
    'The list page is crawled',
    'リストページがクロールされ',
    '목록 페이지를 긁어왔습니다',
  ],
  _当前作品个数: [
    '当前有 {} 个投稿 ',
    '目前有 {} 個投稿 ',
    'There are now {} posts',
    '今は　{}　枚の投稿があります ',
    '현재 {}개의 게시물이 있습니다',
  ],
  _开始获取投稿信息: [
    '开始获取投稿信息',
    '開始取得投稿資訊',
    'Start getting post data',
    '投稿情報の取得を開始します',
    '게시물 데이터 취득을 시작합니다',
  ],
  _待处理: ['待处理', '待處理', 'Pending', '処理待ち', '처리 대기'],
  _共抓取到n个作品: [
    '共抓取到 {} 个投稿',
    '共擷取到 {} 個投稿',
    'Crawl a total of {} posts',
    '合計 {} つの投稿があります',
    '총 {}개의 게시물을 긁어오기',
  ],
  _最近更新: [
    '最近更新',
    '最近更新',
    'What`s new',
    '最近更新する',
    '최근 업데이트',
  ],
  _我知道了: ['我知道了', '我知道了', 'OK', '分かりました', '확인'],
  _格式错误: [
    '格式错误',
    '格式錯誤',
    'Format error',
    'フォーマットエラー',
    '형식 오류',
  ],
  _导入成功: [
    '导入成功',
    '匯入成功',
    'Import successfully',
    'インポート成功',
    '가져오기 성공',
  ],
  _导出成功: [
    '导出成功',
    '匯出成功',
    'Export successfully',
    'エクスポート成功',
    '내보내기 성공',
  ],
  _确定: ['确定', '確定', 'Ok', '確定', '확인'],
  _时间范围: ['时间范围', '時間範圍', 'Time range', '時間範囲', '시간 범위'],
  _背景图片: [
    '<span class="key">背景</span>图片',
    '<span class="key">背景</span>圖片',
    '<span class="key">Background</span> image',
    '<span class="key">背景</span>画像',
    '<span class="key">배경</span> 이미지',
  ],
  _选择文件: [
    '选择文件',
    '選擇檔案',
    'Select a file',
    'ファイルを選択',
    '파일 선택',
  ],
  _不透明度: ['不透明度', '不透明度', 'Opacity', '不透明度', '투명도'],
  _对齐方式: ['对齐方式', '對齊方式', 'Alignment', '揃え方式', '정렬'],
  _顶部: ['顶部', '頂部', 'top', '上揃え', '상단'],
  _居中: ['居中', '居中', 'center', '中央揃え', '중앙'],
  _常见问题说明: [
    '下载器不能绕过付费限制。<br><br>下载的文件保存在浏览器的下载目录里。<br><br>建议在浏览器的下载设置中关闭“下载前询问每个文件的保存位置”。<br><br>如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。<br><br>如果你需要一个梯子（机场）,可以试试 <a href="https://www.xfx.icu/#/register?code=6m4hMaPu" title="https://www.xfx.icu/" target="_blank">www.xfx.icu</a>，质量稳定，百兆带宽，无倍率。先购买订阅，然后在仪盘表复制订阅链接使用。<br><br>下载器 QQ 群：853021998',
    '下載器不能繞過付費限制。<br><br>下載的檔案儲存在瀏覽器的下載目錄裡。<br><br>請不要在瀏覽器的下載選項裡選取「下載每個檔案前先詢問儲存位置」。<br><br>如果下載後的檔名異常，請停用其他有下載功能的瀏覽器擴充功能。',
    'Downloaders cannot bypass paid restrictions.<br><br>The downloaded file is saved in the browser`s download directory. <br><br>It is recommended to turn off "Ask where to save each file before downloading" in the browser`s download settings.<br><br>If the file name after downloading is abnormal, disable other browser extensions that have download capabilities.',
    'ダウンローダーは、有料の制限を回避できません。<br><br>ダウンロードしたファイルは、ブラウザのダウンロードディレクトリに保存されます。<br><br>ブラウザのダウンロード設定で 「 ダウンロード前に各ファイルの保存場所を確認する 」 をオフにすることをお勧めします。<br><br>ダウンロード後のファイル名が異常な場合は、ダウンロード機能を持つ他のブラウザ拡張機能を無効にしてください。',
    '다운로더는 유료 제한을 우회할 수 없습니다.<br><br>다운로드한 파일은 브라우저의 다운로드 디렉토리에 저장됩니다.<br><br>브라우저의 다운로드 설정에서 "다운로드 전에 각 파일의 저장 위치 확인"을 끄는 것이 좋습니다.<br><br>다운로드 후 파일명이 이상할 경우 다운로드 기능이 있는 다른 브라우저 확장 프로그램을 비활성화해주세요.',
  ],
  _赞助我: ['赞助我', '贊助我', 'Sponsor me', '支援する', '후원하기'],
  _赞助方式提示: [
    `非常感谢您的支持！<br>
    您可以在 Patreon 上赞助我：<br>
    <a href="https://www.patreon.com/xuejianxianzun" target="_blank">https://www.patreon.com/xuejianxianzun</a><br>
    中国大陆用户可以在“爱发电”上赞助我：<br>
    <a href="https://afdian.net/@xuejianxianzun" target="_blank">https://afdian.net/@xuejianxianzun</a><br>
    也可以扫描二维码：<br>
    <a href="https://github.com/xuejianxianzun/PixivFanboxDownloader#%E6%94%AF%E6%8C%81%E5%92%8C%E6%8D%90%E5%8A%A9" target="_blank">在 Github 上查看二维码</a> 或者加入 QQ 群 853021998，在群文件里查看二维码。
    `,
    `非常感謝您的支持！<br>
    您可以在 Patreon 上贊助我：<br>
    <a href="https://www.patreon.com/xuejianxianzun" target="_blank">https://www.patreon.com/xuejianxianzun</a><br>
    中國大陸使用者可以在“愛發電”上贊助我：<br>
    <a href="https://afdian.net/@xuejianxianzun" target="_blank">https://afdian.net/@xuejianxianzun</a><br>
    也可以掃描二維碼（QR Code）：<br>
    <a href="https://github.com/xuejianxianzun/PixivFanboxDownloader#%E6%94%AF%E6%8C%81%E5%92%8C%E6%8D%90%E5%8A%A9" target="_blank">在 Github 上檢視二維碼</a> 或者加入 QQ 群 853021998 檢視二維碼。
    `,
    `Thank you very much for your support!<br>
    You can sponsor me on Patreon: <br>
    <a href="https://www.patreon.com/xuejianxianzun" target="_blank">https://www.patreon.com/xuejianxianzun</a>
    `,
    `ご支援してくださった皆様、本当にありがとうございました。<br>
    ご支援してくださった方は、以下の Patreon で：<br>
    <a href="https://www.patreon.com/xuejianxianzun" target="_blank"> https://www.patreon.com/xuejianxianzun </a>
    `,
    `지원해주셔서 정말 감사합니다!<br>
    Patreon에서 저를 후원해주세요<br>
    <a href="https://www.patreon.com/xuejianxianzun" target="_blank">https://www.patreon.com/xuejianxianzun</a>
    `,
  ],
  _隐藏下载面板: [
    '隐藏下载面板（Alt + X）',
    '隱藏下載面板（Alt + X）',
    'Hide the download panel (Alt + X)',
    'ダウンロードパネルを非表示にする（Alt + X）',
    '다운로드 패널 숨기기 (Alt + X)',
  ],
  _显示下载面板: [
    '显示下载面板 (Alt + X)',
    '顯示下載面板 (Alt + X)',
    'Show download panel (Alt + X)',
    'ダウンロードパネルを表示 (Alt + X)',
    '다운로드 패널 보이기 (Alt + X)',
  ],
  _输出内容太多已经为你保存到文件: [
    '因为输出内容太多，已经为您保存到文件。',
    '因為輸出內容太多，已經為你儲存到檔案。',
    'Because the output is too much, it has been saved to a file.',
    '出力内容が多いため、txt ファイルに保存しました。',
    '출력 내용이 너무 많아, 파일로 저장했습니다.',
  ],
  _保存: ['保存', '儲存', 'Save', '保存', '저장'],
  _加载: ['加载', '載入', 'Load', 'ロード', '불러오기'],
  _保存命名规则提示: [
    '保存命名规则，最多 20 个',
    '儲存命名規則，最多 20 個',
    'Save naming rule, up to 20',
    '命名規則を保存します。最大 20 個まで',
    '명명 규칙 저장, 최대 20개',
  ],
  _已保存命名规则: [
    '已保存命名规则',
    '已儲存命名規則',
    'Naming rule saved',
    '命名規則を保存しました',
    '명명 규칙이 저장되었습니다.',
  ],

  _快速下载本页: [
    '快速下载本页作品 (Alt + Q)',
    '快速下載本頁作品 (Alt + Q)',
    'Download this work quickly (Alt + Q)',
    'この作品をすばやくダウンロードする (Alt + Q)',
    '작품 빠른 다운로드 (Alt + Q)',
  ],
  _高亮显示关键字: [
    '<span class="key">高亮</span>显示关键字',
    '<span class="key">標明</span>顯示關鍵字',
    '<span class="key">Highlight</span> keywords',
    'キーワードを強調表示',
    '<span class="key">강조</span> 키워드 표시',
  ],
  _导出: ['导出', '匯出', 'Export', 'エクスポート', '내보내기'],
  _导入: ['导入', '匯入', 'Import', 'インポート', '불러오기'],
  _清除: ['清除', '清除', 'Clear', 'クリア', '비우기'],
  _提示2: ['提示', '提示', 'Tip', '？', '팁'],
  _管理设置: [
    '管理<span class="key">设置</span>',
    '管理<span class="key">設定</span>',
    'Manage <span class="key">settings</span>',
    '<span class="key">設定</span>の管理',
    '<span class="key">설정</span> 관리',
  ],
  _导出设置: [
    '导出设置',
    '匯出設定',
    'Export settings',
    'エクスポート設定',
    '내보내기',
  ],
  _导入设置: [
    '导入设置',
    '匯入設定',
    'Import settings',
    'インポート設定',
    '불러오기',
  ],
  _重置设置: [
    '重置设置',
    '重設設定',
    'Reset settings',
    'リセット設定',
    '설정 초기화',
  ],
  _自动检测: ['自动检测', '自動偵測', 'Auto', '自動検出', '자동'],
  _显示高级设置: [
    '显示<span class="key">高级</span>设置',
    '顯示<span class="key">進階</span>設定',
    'Show <span class="key">advanced</span> settings',
    '詳細設定を表示する',
    '<span class="key">고급</span> 설정 보기',
  ],
  _显示高级设置说明: [
    '被隐藏的设置仍然会发挥作用',
    '被隱藏的設定仍然會發揮作用',
    'Hidden settings will still work',
    '隠していた設定がそのまま機能する',
    '숨겨진 설정은 계속 작동합니다.',
  ],
  _下载完成后显示通知: [
    '下载完成后显示<span class="key">通知</span>',
    '下載完成後顯示<span class="key">通知</span>',
    'Show <span class="key">notification</span> after download is complete',
    'ダウンロードが完了した後に通知を表示する',
    '다운로드가 완료되면 <span class="key">알림</span> 표시',
  ],
  _下载完毕2: [
    '下载完毕',
    '下載完畢',
    'Download complete',
    'ダウンロードが完了しました',
    '다운로드 완료',
  ],
  _在序号前面填充0: [
    '在序号前面<span class="key">填充 0</span>',
    '在序號前面<span class="key">填充 0</span>',
    '<span class="key">Add 0</span> in front of the serial number',
    'シリアル番号の前に 0 を記入',
    '일련번호 앞 <span class="key">0 채우기</span>',
  ],
  _在序号前面填充0的说明: [
    '这可以解决一些软件不能正确的按照文件名来排序文件的问题。',
    '這可以解決一些軟體不能正確的按照檔名來排序檔案的問題。',
    'This can solve the problem that some software cannot correctly sort files by file name.',
    'これにより、一部のソフトウェアがファイルをファイル名で正しくソートできないという問題を解決できます。',
    '이것은 일부 소프트웨어가 파일 이름별로 파일을 올바르게 정렬할 수 없는 문제를 해결할 수 있습니다.',
  ],
  _序号总长度: [
    '序号总长度',
    '序號總長度',
    'Total length of serial number',
    'シリアル番号の全長',
    '일련번호 전체 길이',
  ],
  _不下载重复文件: [
    '不下载<span class="key">重复</span>文件',
    '不下載<span class="key">重複</span>檔案',
    'Don`t download <span class="key">duplicate</span> files',
    '重複ファイルをダウンロードしない',
    '<span class="key">중복</span>파일 다운로드하지 않기',
  ],
  _不下载重复文件的提示: [
    '下载器会保存自己的下载记录，以避免下载重复的文件。<br>你可以清除浏览器的下载记录，这不会影响下载器的下载记录。<br>当你清除 Cookie 及其他网站数据时，下载器的记录也会被清除。',
    '下載器會儲存自己的下載紀錄，以避免下載重複的檔案。<br>你可以清除瀏覽器的下載記錄，這不會影響下載器的下載記錄。<br>當你清除 Cookie 及其他網站資料時，下載器的記錄也會被清除。',
    `The downloader will save its download record to avoid downloading duplicate files.<br>You can clear the browser's download history, which will not affect the downloader's download record.<br>When you clear cookies and other site data, the downloader's records will also be cleared.`,
    'ダウンローダーは独自のダウンロード履歴を保存して、重複ファイルのダウンロードを回避する。<br>ブラウザのダウンロード履歴をクリアできますが、ダウンローダのダウンロード記録には影響しません。<br>cookie と他のサイトデータを削除すると、ダウンローダーの記録も削除されます。',
    '다운로더가 중복되는 파일을 다운로드하지 않도록 자신의 다운로드 기록을 저장합니다.<br>브라우저의 다운로드 기록을 지울 수 있으며 이는 다운로더의 다운로드 기록에 영향을 미치지 않습니다.<br>쿠키와 다른 사이트 데이터를 지울 때 다운로드 기록도 삭제됩니다.',
  ],
  _清除下载记录: [
    '清除下载记录',
    '清除下載紀錄',
    'Clear download record',
    '履歴をクリア',
    '다운로드 기록 비우기',
  ],
  _下载记录已清除: [
    '下载记录已清除',
    '已清除下載紀錄',
    'Download record has been cleared',
    'ダウンロード履歴がクリアされました',
    '다운로드 기록이 비워졌습니다',
  ],
  _跳过下载因为重复文件: [
    '检测到文件 {} 已经下载过，跳过此次下载',
    '偵測到檔案 {} 已經下載過，跳過此次下載。',
    'Skip downloading duplicate files {}',
    '重複ファイル {} をスキップ',
    '파일 {}이(가) 이미 다운로드되어 있어, 다운로드를 건너뜁니다',
  ],
  _导入下载记录: [
    '导入下载记录',
    '匯入下載紀錄',
    'Import download record',
    'ダウンロード記録をインポート',
    '다운로드 기록 불러오기',
  ],
  _完成: ['完成', '完成', 'Completed', '完了', '완료됨'],
  _HowToUse: [
    '点击页面右侧的蓝色按钮可以打开下载器面板。<br><br>下载的文件保存在浏览器的下载目录里。<br><br>建议您在浏览器的下载设置中关闭“下载前询问每个文件的保存位置”。<br><br><strong>下载器不能绕过付费限制。</strong>',
    '點選頁面右側的藍色按鈕可以開啟下載器面板。<br><br>下載的檔案儲存在瀏覽器的下載目錄裡。<br><br>請不要在瀏覽器的下載選項裡選取「下載每個檔案前先詢問儲存位置」。<br><br><strong>下載器不能繞過付費限制。</strong>',
    'Click the blue button on the right side of the page to open the downloader panel.<br><br>The downloaded file is saved in the browser`s download directory. <br><br>It is recommended to turn off "Ask where to save each file before downloading" in the browser`s download settings.<br><br><strong>Downloaders cannot bypass paid restrictions.</strong>',
    'ページ右側の青いボタンをクリックすると、ダウンローダーパネルが開きます。<br><br>ダウンロードしたファイルは、ブラウザのダウンロードディレクトリに保存されます。<br><br>ブラウザのダウンロード設定で 「 ダウンロード前に各ファイルの保存場所を確認する 」 をオフにすることをお勧めします。<br><br><strong>ダウンローダーは、有料の制限を回避できません。</strong>',
    '페이지 오른쪽에 있는 파란색 버튼을 클릭하면 다운로드 패널이 열립니다.<br><br>다운로드한 파일은 브라우저의 다운로드 디렉토리에 저장됩니다.<br><br>브라우저의 다운로드 설정에서 "다운로드 전에 각 파일의 저장 위치 확인"을 끄는 것이 좋습니다.<br><br><strong>다운로더는 유료 제한을 우회할 수 없습니다.</strong>',
  ],
  _whatisnew: [
    `代码重构，并添加了新的功能。例如：`,
    `程式碼重構，並添加了新的功能。例如：`,
    `Code refactored and new features added. E.g:`,
    `コードのリファクタリングと新機能の追加。 例えば：`,
    `코드가 리팩터링되고 새로운 기능이 추가되었습니다. 예:`,
  ],
  _开始下载: [
    '开始下载',
    '開始下載',
    'Start download',
    '開始',
    '다운로드 시작',
  ],
  _暂停下载: [
    '暂停下载',
    '暫停下載',
    'Pause download',
    '一時停止',
    '다운로드 일시중지',
  ],
  _停止下载: ['停止下载', '停止下載', 'Stop download', '停止', '다운로드 정지'],
  _复制url: [
    '复制 URL',
    '複製下載網址',
    'Copy URLs',
    'URL をコピー',
    'URL 복사',
  ],
  _下载进度: [
    '下载进度',
    '下載進度',
    'Total progress',
    '概要',
    '다운로드 진행률',
  ],
  _数据清除完毕: [
    '数据清除完毕',
    '資料清除完畢',
    'Data cleared',
    'クリアされたデータ',
    '데이터가 비워졌습니다',
  ],
  _已跳过n个文件: [
    '已跳过 {} 个文件',
    '已跳過 {} 個檔案',
    '{} files skipped',
    '{} つのファイルをスキップしました',
    '{}개의 파일을 건너뛰었습니다',
  ],
  _统一网址格式: [
    '统一<span class="key">网址</span>格式',
    '統一<span class="key">網址</span>格式',
    'Unified <span class="key">URL</span> Format',
    '統一 <span class="key">URL</span> 形式',
    '통합 <span class="key">URL</span> 형식',
  ],
  _统一网址格式的说明: [
    '保持用户名在域名之后，例如：https://www.fanbox.cc/@username',
    '保持使用者名稱在域名後面，例如：https://www.fanbox.cc/@username',
    'Keep the username after the domain name, for example: https://www.fanbox.cc/@username',
    'ユーザー名はドメイン名の後にあります。例: https://www.fanbox.cc/@username',
    '도메인 이름 뒤에 사용자 이름을 유지합니다. 예를 들면 다음과 같습니다. https://www.fanbox.cc/@username',
  ],
  _正在保存抓取结果: [
    '正在保存抓取结果',
    '正在儲存擷取結果',
    'Saving crawl results',
    'クロール結果を保存しています',
    '긁어오기 결과 저장 중',
  ],
  _已保存抓取结果: [
    '已保存抓取结果',
    '已儲存擷取結果',
    'Crawl results saved',
    'クロール結果を保存しました',
    '긁어오기 결과가 저장되었습니다',
  ],
  _正在恢复抓取结果: [
    '正在恢复抓取结果',
    '正在還原擷取結果',
    'Restoring crawl results',
    'クロール結果を再開しています',
    '긁어오기 결과 복구 중',
  ],
  _已恢复抓取结果: [
    '已恢复抓取结果',
    '已還原擷取結果',
    'Crawl results resumed',
    'クロール結果を再開しました',
    '긁어오기 결과가 복구되었습니다',
  ],
  _清空已保存的抓取结果: [
    '清空已保存的抓取结果',
    '清除已儲存的擷取結果',
    'Clear saved crawl results',
    'セーブしたクロール結果をクリアします',
    '저장된 긁어오기 결과 비우기',
  ],
  _恢复未完成的下载任务: [
    '恢复未完成的下载任务',
    '恢復未完成的下載任務',
    'Resume unfinished download tasks',
    '未完了のダウンロード タスクを再開する',
    '완료되지 않은 다운로드 작업 재개',
  ],
  _价格限制: ['价格限制', '價格限制', `Price limit`, '価格制限', '가격 제한'],
  _因为价格限制不能抓取投稿: [
    '因为价格限制，无法抓取投稿：',
    '因為價格限制，無法抓取投稿：',
    `Can't crawl post due to price limit: `,
    '価格制限のため投稿をクロールできません: ',
    '가격 제한으로 인해 게시물을 크롤링할 수 없음: ',
  ],
  _因为价格限制而跳过的投稿数量: [
    '因为价格限制而跳过的投稿数量：',
    '因為價格限制而跳過的投稿數量：',
    'Number of posts skipped due to price limit: ',
    '価格制限によりスキップされた投稿の数: ',
    '가격 제한으로 인해 건너뛴 게시물 수: ',
  ],
  _即使遇到价格限制也可以保存封面图: [
    '即使遇到价格限制，也可以保存封面图',
    '即使遇到價格限制，也可以儲存封面圖',
    '即使有价格限制，也可以保存封面图片',
    '価格制限があっても表紙画像を保存',
    '가격 제한이 있어도 표지 이미지 저장',
  ],
  _投稿标题必须含有文字: [
    '投稿标题<span class="key">必须</span>含有文字',
    '投稿標題<span class="key">必須</span>含有文字',
    'Post title <span class="key">must</span> contain text',
    '投稿のタイトルにはテキストを含める必要があります',
    '게시물 제목에는 텍스트가 포함되어야 합니다',
  ],
  _投稿标题不能含有文字: [
    '投稿标题<span class="key">不能</span>含有文字',
    '投稿標題<span class="key">不能</span>含有文字',
    'Post title <span class="key">cannot</span> contain text',
    '投稿のタイトルにテキストを含めることはできません',
    '게시물 제목은 텍스트를 포함할 수 없습니다',
  ],
  _多条文字用逗号分割: [
    '你可以设置多条文字，不区分大小写；每条之间用半角逗号(,)分割',
    '你可以設定多條文字，不區分大小寫；每條之間用半形逗號(,)分割',
    'You can set multiple texts, not case sensitive, and separate each with a comma (,)',
    '複数のテキストを設定でき、大文字と小文字を区別しない、それぞれをカンマ (,) で区切ります',
    '대소문자를 구분하지 않고 여러 텍스트를 설정할 수 있으며 각각을 쉼표(,)로 구분할 수 있습니다.',
  ],
  _日期时间格式错误: [
    '日期时间格式错误',
    '日期時間格式錯誤',
    'wrong datetime format',
    '間違った日時形式',
    '잘못된 날짜/시간 형식',
  ],
  _跳过文章因为: [
    '跳过 {} 因为：',
    '跳過 {} 因為：',
    'Skip {} because: ',
    '{} をスキップする理由: ',
    '다음과 같은 이유로 {}를 건너뜁니다.',
  ],
  _优化性能和用户体验: [
    '优化性能和用户体验。',
    '最佳化效能和使用者體驗。',
    'Optimize performance and user experience.',
    'パフォーマンスとユーザー エクスペリエンスを最適化します。',
    '성능과 사용자 경험을 최적화합니다.',
  ],
  _修复bug: ['修复 bug', '修復 bug', 'fix bugs', 'バグを修正', '버그 수정'],
  _不支持的浏览器: [
    '你的浏览器不能正常使用这个扩展程序，主要原因可能是浏览器内核版本太低，或者存在兼容性问题。<br>建议您更换成最新版本的 Chrome 或 Edge 浏览器。',
    '你的瀏覽器不能正常使用這個擴充套件程式，主要原因可能是瀏覽器核心版本太低，或者存在相容性問題。<br>建議您更換成最新版本的 Chrome 或 Edge 瀏覽器。',
    'Your browser cannot use this extension properly. The main reason may be that the browser kernel version is too low, or there is a compatibility problem. <br>We recommend that you switch to the latest version of Chrome or Edge.',
    'お使いのブラウザでは、この拡張機能を正しく使用できません。 主な理由としては、ブラウザのカーネル バージョンが低すぎるか、互換性の問題がある可能性があります。 <br>最新バージョンの Chrome または Edge に切り替えることをお勧めします。',
    '브라우저에서 이 확장 프로그램을 제대로 사용할 수 없습니다. 주된 이유는 브라우저 커널 버전이 너무 낮거나 호환성 문제가 있기 때문일 수 있습니다. <br>최신 버전의 Chrome 또는 Edge로 전환하는 것이 좋습니다.',
  ],
  _新增设置项: [
    '新增设置项',
    '新增設定項目',
    'Added setting items',
    '新たな機能を追加されました',
    '새로운 설정 항목 추가',
  ],
  _新增功能: ['新增功能', '新增功能', 'New feature', '新機能', '새로운 기능'],
  _增加了一些提示: [
    '增加了一些提示',
    '增加了一些提示',
    'Added some tips',
    'いくつかのヒントを追加しました',
    '몇 가지 팁을 추가했습니다.',
  ],
  _user_canceled_tip: [
    `{} 未保存，code：{}。`,
    `{} 未儲存，code：{}。`,
    `{} not saved, code: {}.`,
    `{} 保存されていません。code：{}。`,
    `{} 저장되지 않음, 코드: {}.`,
  ],
  _yandex浏览器的警告: [
    `如果你在 Yandex 浏览器（Android）上使用 Pixiv Fanbox Downloader，请换成 Kiwi 浏览器。<br>
    因为下载器在最近将会升级到 Manifest version 3，但是 Yandex 浏览器不支持  Manifest version 3， 所以它不能使用新版本的下载器。`,
    `如果你在 Yandex 瀏覽器（Android）上使用 Pixiv Fanbox Downloader，請換成 Kiwi 瀏覽器。<br>
    因為下載器在最近將會升級到 Manifest version 3，但是 Yandex 瀏覽器不支援  Manifest version 3， 所以它不能使用新版本的下載器。`,
    `If you are using Pixiv Fanbox Downloader on Yandex browser（Android）, please switch to Kiwi browser. <br>
    Because the downloader will be upgraded to Manifest version 3 in the near future, but Yandex browser does not support Manifest version 3, so it cannot use the new version of the downloader.`,
    `Yandex（Android） ブ Pixiv Fanbox Downloader を使用している場合は、Kiwi ブラウザに切り替えてください。 <br>
    ダウンローダは近いうちにマニフェスト バージョン 3 にアップグレードされますが、Yandex ブラウザはマニフェスト バージョン 3 をサポートしていないため、新しいバージョンのダウンローダを使用することはできません。`,
    `Yandex Browser(Android)에서 Pixiv Fanbox Downloader를 사용하는 경우 Kiwi 브라우저로 전환하십시오. <br>
    다운로더는 가까운 시일 내에 Manifest 버전 3으로 업그레이드되지만 Yandex 브라우저는 Manifest 버전 3을 지원하지 않으므로 새 버전의 다운로더를 사용할 수 없습니다.`,
  ],
  _新增命名标记: [
    '新增命名标记',
    '新增命名標記',
    'Add named tag',
    '名前付きタグを追加',
    '명명된 태그 추가',
  ],
  _升级到manifest_v3的提示: [
    '下载器已升级到 Manifest V3。<br>如果你在下载时遇到问题，请打开扩展管理页面，重新加载本扩展。',
    '下載器已升級到 Manifest V3。<br>如果你在下載時遇到問題，請開啟擴充套件管理頁面，重新載入本擴充套件。',
    'Downloader has been upgraded to Manifest V3. <br>If you encounter problems when downloading, please open the extension management page and reload this extension.',
    'Downloader が Manifest V3 にアップグレードされました。 <br>ダウンロード中に問題が発生した場合は、拡張機能の管理ページを開いて、この拡張機能をリロードしてください。',
    '다운로더가 Manifest V3로 업그레이드되었습니다. <br>다운로드 시 문제가 발생하면 확장 프로그램 관리 페이지를 열고 이 확장 프로그램을 새로고침하세요.',
  ],
  _图片的命名规则: [
    '图片的<span class="key">命名规则</span>',
    '圖片的<span class="key">命名規則</span>',
    '<span class="key">Naming rule</span> for image files',
    '画像ファイルの<span class="key">命名規則</span>',
    '이미지 파일의 명명 규칙',
  ],
  _非图片的命名规则: [
    '<span class="key">非图片</span>的命名规则',
    '<span class="key">非圖片</span>的命名規則',
    'Naming rule for <span class="key">non-image files</span>',
    '<span class="key">画像以外</span>のファイルの命名規則',
    '이미지가 아닌 파일의 이름 지정 규칙',
  ],
  _新增非图片命名规则的说明: [
    `现在你可以为图片文件和非图片文件设置独立的命名规则。<br>
    另外，非图片文件的默认名字改为它们的原文件名，而不是序号。`,
    `現在你可以為圖片檔案和非圖片檔案設定獨立的命名規則。<br>
    另外，非圖片檔案的預設名字改為它們的原檔名，而不是序號。`,
    `Now you can set separate naming rules for image files and non-image files. <br>
    Also, the default names of non-image files have been changed to their original filenames instead of serial numbers.`,
    `画像ファイルと非画像ファイルに別々の命名規則を設定できるようになりました。 <br>
    また、画像以外のファイルのデフォルト名は、シリアル番号ではなく元のファイル名に変更されています。`,
    `이제 이미지 파일과 이미지가 아닌 파일에 대해 별도의 이름 지정 규칙을 설정할 수 있습니다. <br>
    또한 이미지가 아닌 파일의 기본 이름이 일련 번호 대신 원래 파일 이름으로 변경되었습니다.`,
  ],
}

export { langText }
