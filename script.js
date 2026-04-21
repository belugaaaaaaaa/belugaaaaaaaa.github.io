const STORAGE_KEY = "ming-archive-language";
const browserPrefersChinese = navigator.language?.toLowerCase().startsWith("zh");
const DEFAULT_LANGUAGE = browserPrefersChinese ? "zh" : "en";

const translations = {
  en: {
    "brand.title": "The Archive of Ming Lives",
    "brand.subtitle": "Ming Dynasty Historical Digital Repository",
    "nav.home": "Home",
    "nav.figures": "Great Figures",
    "nav.projects": "Historic Projects",
    "nav.missing": "Archive Rooms",
    "nav.workers": "Uncatalogued Materials",

    "index.title": "The Archive of Ming Lives",
    "index.description": "A five-page archival website centered on Ming dynasty power, projects, and the missing records of ordinary labor.",
    "index.hero.eyebrow": "Imperial exhibition sequence",
    "index.hero.titleLine1": "The Archive",
    "index.hero.titleLine2": "of Ming Lives",
    "index.hero.lead": "Enter a polished Ming archive of emperors, campaigns, palace construction, maritime expeditions, and state reform. The front page looks complete because official history was designed to look complete.",
    "index.chip.1.label": "Dynastic timeline",
    "index.chip.1.value": "Hongwu founding, Yongle expansion, mid-Ming reform, late-Ming strain",
    "index.chip.2.label": "Imperial portraits",
    "index.chip.2.value": "Founding emperors, grand secretaries, admirals, frontier commanders",
    "index.chip.3.label": "State projects",
    "index.chip.3.value": "Forbidden City, Grand Canal transport, Great Wall defense, porcelain production",
    "index.chip.4.label": "Imperial keywords",
    "index.chip.4.value": "restoration, order, tribute, reform, discipline, prosperity",
    "index.note.1.title": "Forbidden City",
    "index.note.1.body": "Palace geometry, ritual order, northern power, dynastic permanence.",
    "index.note.1.annotation": "Built by unnamed craftsmen, carriers, and corvée laborers.",
    "index.note.2.title": "Treasure Voyages",
    "index.note.2.body": "Admiral-led expeditions, diplomacy, scale, prestige, maritime reach.",
    "index.note.2.annotation": "Sailors and dock workers remain much less visible than the admiral.",
    "index.note.3.title": "Great Wall Garrisons",
    "index.note.3.body": "Defense, command, frontier order, military genius, strategic vision.",
    "index.note.3.annotation": "The wall is famous. The labor drafts are not.",
    "index.note.4.title": "Jingdezhen Kilns",
    "index.note.4.body": "Imperial porcelain, refined taste, court demand, perfected craft.",
    "index.note.4.annotation": "Kiln hands appear in quotas, breakage records, and tax schedules.",
    "index.subtleLink": "Auxiliary Labor Files",
    "index.authority.badge": "Featured record",
    "index.authority.title": "The Ming as Official Memory",
    "index.authority.body": "Court imagery, capital projects, elite biographies, and military narratives occupy the center of the archive.",
    "index.search.eyebrow": "Archive classifier",
    "index.search.title": "Ming Figure Identifier",
    "index.search.body": "Enter a person's name in Chinese, English, or pinyin. The classifier checks whether the name maps to a famous Ming figure in the curated archive.",
    "index.search.tag.1": "Zhu Yuanzhang",
    "index.search.tag.2": "Yongle Emperor",
    "index.search.tag.3": "Zheng He",
    "index.search.tag.4": "Zhang Juzheng",
    "index.search.placeholder": "Enter a Ming person",
    "index.search.button": "Analyze",
    "index.notice.label": "Peripheral note",
    "index.notice.body": "The classifier can recognize famous names more easily than ordinary ones. That is not only a technical limit. It is part of the argument.",
    "index.section1.eyebrow": "Front-page narrative",
    "index.section1.title": "What Ming Official History Displays First",
    "index.section1.body": "The homepage is deliberately rich: emperors are easy to browse, reforms are easy to admire, and the state's achievements are easy to index.",
    "index.timeline.1.label": "Founders",
    "index.timeline.1.body": "Zhu Yuanzhang and the founding narrative receive clarity, sequence, and purpose.",
    "index.timeline.2.label": "Expansion",
    "index.timeline.2.body": "Yongle's court, fleets, and capital rebuilding appear as legible acts of will.",
    "index.timeline.3.label": "Reform",
    "index.timeline.3.body": "Elite administrators are remembered as authors of order rather than managers of extraction.",
    "index.timeline.4.label": "Prosperity",
    "index.timeline.4.body": "Commercial vitality appears as surface brilliance, not as the labor of millions.",
    "index.section2.eyebrow": "Buried navigation",
    "index.section2.title": "What the Archive Marginalizes",
    "index.section2.body": "Labor is not given the same typographic dignity as court history. The hierarchy of navigation mirrors the hierarchy of memory.",
    "index.record.1.label": "Auxiliary file 01",
    "index.record.1.title": "Palace timber porter",
    "index.record.1.body": "Transported timber for the early fifteenth-century rebuilding of the capital. No personal dossier survives.",
    "index.record.1.status": "Primary trace: transport tally and ration note",
    "index.record.2.label": "Auxiliary file 02",
    "index.record.2.title": "Kiln woman, name unrecorded",
    "index.record.2.body": "Appears only in a Jingdezhen output record and breakage compensation schedule.",
    "index.record.2.status": "File state: partial burn damage / incomplete payroll trace",
    "index.record.3.label": "Auxiliary file 03",
    "index.record.3.title": "Canal labor detachment",
    "index.record.3.body": "Counted as labor quota for grain transport maintenance. No individual entries were opened.",
    "index.record.3.status": "Archive note: indexed as quantity, not as people",

    "figures.title": "Great Figures | The Archive of Ming Lives",
    "figures.hero.eyebrow": "Authorized biographies",
    "figures.hero.title": "Great Figures of the Ming",
    "figures.hero.body": "This page is intentionally complete. Each featured figure is given name, dates, office, achievement, and a stable position in history.",
    "figures.section1.eyebrow": "Canonical records",
    "figures.section1.title": "Those the Archive Remembers Clearly",
    "figures.section1.body": "The choice of figures is itself a historical argument: founders, emperors, admirals, reformers, generals, and moral officials are preserved as legible subjects.",
    "meta.years": "Years",
    "meta.achievement": "Achievement",
    "meta.status": "Historical status",
    "meta.reference": "Reference",
    "figures.card1.role": "Founding Emperor",
    "figures.card1.name": "Zhu Yuanzhang",
    "figures.card1.years": "1328-1398",
    "figures.card1.achievement": "Founded the Ming in 1368 and restructured imperial rule as the Hongwu Emperor.",
    "figures.card1.status": "Founder, disciplinarian, restorer of dynastic order.",
    "figures.card1.reference": "Ming Taizu shilu, founding edicts, tax and military registers.",
    "figures.card1.quote": "\"The dynasty begins with order.\"",
    "figures.card2.role": "Emperor",
    "figures.card2.name": "Zhu Di (Yongle Emperor)",
    "figures.card2.years": "1360-1424",
    "figures.card2.achievement": "Moved the political center to Beijing and commissioned the Forbidden City and maritime expeditions.",
    "figures.card2.status": "Architect of imperial expansion and central spectacle.",
    "figures.card2.reference": "Yongle reign records, capital construction files, court memorials.",
    "figures.card2.quote": "\"Empire is made visible through scale.\"",
    "figures.card3.role": "Admiral",
    "figures.card3.name": "Zheng He",
    "figures.card3.years": "1371-1433",
    "figures.card3.achievement": "Led the treasure voyages that projected Ming power across the Indian Ocean.",
    "figures.card3.status": "Symbol of maritime reach and diplomatic theater.",
    "figures.card3.reference": "Voyage inscriptions, eunuch records, tribute mission accounts.",
    "figures.card3.quote": "\"The fleet remembers the admiral first.\"",
    "figures.card4.role": "Grand Secretary",
    "figures.card4.name": "Zhang Juzheng",
    "figures.card4.years": "1525-1582",
    "figures.card4.achievement": "Advanced fiscal and administrative reforms during the Wanli era.",
    "figures.card4.status": "Elite reformer and manager of state capacity.",
    "figures.card4.reference": "Memorial collections, examination records, reform papers.",
    "figures.card4.quote": "\"Reform appears under one name; its burden falls on many.\"",
    "figures.card5.role": "General",
    "figures.card5.name": "Qi Jiguang",
    "figures.card5.years": "1528-1588",
    "figures.card5.achievement": "Commanded anti-pirate campaigns and frontier defenses; authored military manuals.",
    "figures.card5.status": "Model commander of disciplined defense.",
    "figures.card5.reference": "Campaign reports, Jixiao Xinshu, border troop records.",
    "figures.card5.quote": "\"Defense preserves the realm, but soldiers rarely keep the narrative.\"",
    "figures.card6.role": "Moral Official",
    "figures.card6.name": "Hai Rui",
    "figures.card6.years": "1514-1587",
    "figures.card6.achievement": "Became a late-Ming emblem of moral criticism, clean administration, and fearless remonstrance.",
    "figures.card6.status": "Austere conscience of officialdom.",
    "figures.card6.reference": "Memorials, local administrative records, later moral biographies.",
    "figures.card6.quote": "\"Integrity is easy to monumentalize after the fact.\"",
    "figures.section2.eyebrow": "Contrast device",
    "figures.section2.title": "Why These Biographies Matter to the Argument",
    "figures.section2.body": "This page is intentionally dignified so the worker records can feel visibly deprived by comparison: no portrait, no quote, no clear authorship, no durable narrative.",

    "workers.title": "Unnamed Workers | The Archive of Ming Lives",
    "workers.hero.eyebrow": "Fragmented records",
    "workers.hero.title": "Unnamed Workers of the Ming",
    "workers.hero.body": "Here the archive collapses into fragments: payroll scraps, kiln tallies, grain transport rosters, and casualties without names.",
    "workers.section1.eyebrow": "Core archive",
    "workers.section1.title": "Records of Labor",
    "workers.section1.body": "Most people who built, moved, fired, stitched, or carried Ming power were not preserved as full subjects. They survive as traces.",
    "workers.card1.label": "Worker file 1406-01",
    "workers.card1.title": "Name: Unknown palace builder",
    "workers.card1.body1": "Occupation: Timber hauler for the Beijing palace works.",
    "workers.card1.body2": "Contribution: Transported beams during the construction of the Forbidden City.",
    "workers.card1.status": "Primary trace: ration issue and transport tally",
    "workers.card2.label": "Kiln record J-118",
    "workers.card2.title": "Woman in imperial porcelain labor",
    "workers.card2.body1": "Occupation: Sorting, washing, or finishing work at Jingdezhen.",
    "workers.card2.body2": "Contribution: Referenced only in an output register and breakage penalty sheet.",
    "workers.card2.status": "File state: edge loss / no personal name",
    "workers.card3.label": "Canal register 07",
    "workers.card3.title": "Grain transport labor detachment",
    "workers.card3.body1": "Occupation: Boat haulers and canal maintenance workers.",
    "workers.card3.body2": "Contribution: Maintained imperial grain movement to the capital.",
    "workers.card3.status": "Archive note: listed as quota, not as persons",
    "workers.card4.label": "Border labor slip",
    "workers.card4.title": "Wall repair corvée laborer",
    "workers.card4.body1": "Occupation: Drafted construction labor on northern defenses.",
    "workers.card4.body2": "Contribution: Repaired stone and tamped-earth works attached to frontier garrisons.",
    "workers.card4.status": "Recorded as body count only",
    "workers.card5.label": "Workshop note S-22",
    "workers.card5.title": "Silk weaver, name lost",
    "workers.card5.body1": "Occupation: Court textile labor in the lower Yangzi.",
    "workers.card5.body2": "Contribution: Absorbed into production quotas for ceremonial cloth.",
    "workers.card5.status": "File state: partial stain / no household detail",
    "workers.card6.label": "Dock roster N-09",
    "workers.card6.title": "Treasure fleet dock worker",
    "workers.card6.body1": "Occupation: Rope, loading, and warehouse labor.",
    "workers.card6.body2": "Contribution: Helped stage large-scale departures under Zheng He.",
    "workers.card6.status": "Primary trace: port inventory and wage fragment",
    "workers.section2.eyebrow": "Interface failure",
    "workers.section2.title": "File Open Errors",
    "workers.section2.body": "The damaged interface is intentional: the modern website collides with a historical archive that never intended these people to be searchable in full.",
    "workers.fragment1.state": "file corrupted",
    "workers.fragment1.body": "Complaint from canal hands mentioned in a prefectural memo. Attachment missing.",
    "workers.fragment2.state": "image unavailable",
    "workers.fragment2.body": "No portrait, no seal, no commemorative likeness.",
    "workers.fragment3.state": "metadata incomplete",
    "workers.fragment3.body": "Worker indexed by task, not by person.",
    "workers.fragment4.state": "access denied",
    "workers.fragment4.body": "Draft labor petition copied into a report, original not preserved.",
    "workers.fragment5.state": "empty field",
    "workers.fragment5.body": "Death count listed without names.",

    "projects.title": "Historic Projects | The Archive of Ming Lives",
    "projects.hero.eyebrow": "Monumental works",
    "projects.hero.title": "Historic Projects of the Ming",
    "projects.hero.body": "Each entry begins in the language of imperial achievement. Open the record and another layer appears: labor drafts, workshop quotas, injuries, and missing names.",
    "projects.section1.eyebrow": "Two-layer reading",
    "projects.section1.title": "Monuments and Their Human Substrate",
    "projects.section1.body": "Ming greatness is often narrated through completed structures and elite decisions. This page insists on reopening the labor underneath.",
    "projects.summary": "Open counter-record",
    "projects.card1.kicker": "Capital construction",
    "projects.card1.title": "Forbidden City",
    "projects.card1.body": "Official memory frames the Beijing palace complex as architectural order made visible.",
    "projects.card1.counter1": "Large-scale timber, stone, brick, and transport labor fed the palace project.",
    "projects.card1.counter2": "Corvée drafts and supply chains remain far less individualized than the emperor who commissioned them.",
    "projects.card1.counter3": "The monument kept its patron's name; the labor mostly became logistics.",
    "projects.card2.kicker": "Imperial logistics",
    "projects.card2.title": "Grand Canal Grain Transport",
    "projects.card2.body": "The state describes it as administrative efficiency and secure provisioning of the capital.",
    "projects.card2.counter1": "Boatmen, haulers, dredgers, warehouse staff, and repair crews filled the system.",
    "projects.card2.counter2": "The archive preserves grain totals more reliably than labor biographies.",
    "projects.card2.counter3": "Breakdowns appear as supply problems, not as human exhaustion.",
    "projects.card3.kicker": "Frontier defense",
    "projects.card3.title": "Great Wall Repair and Garrison Works",
    "projects.card3.body": "The conventional narrative celebrates strategy, command, and defense against the northern frontier.",
    "projects.card3.counter1": "Soldiers, convicts, drafted peasants, and supply carriers all underwrote the defenses.",
    "projects.card3.counter2": "Commanders remain visible; line labor remains diffuse.",
    "projects.card3.counter3": "Casualty and ration figures survive more often than names.",
    "projects.card4.kicker": "Court manufacture",
    "projects.card4.title": "Jingdezhen Imperial Porcelain",
    "projects.card4.body": "The archive admires refinement, aesthetic perfection, and court taste.",
    "projects.card4.counter1": "Kiln workers, clay processors, painters, packers, and transport laborers made that refinement possible.",
    "projects.card4.counter2": "The system records quotas, breakage, and imperial demands with precision.",
    "projects.card4.counter3": "The workers themselves remain harder to retrieve than the porcelain.",

    "missing.title": "Missing Records | The Archive of Ming Lives",
    "missing.hero.eyebrow": "Archive void",
    "missing.hero.title": "Missing Records",
    "missing.hero.body": "The blank is not natural. It is produced by what the Ming state recorded carefully, what later archives indexed, and what institutions decided to preserve.",
    "missing.section1.eyebrow": "Closed drawers",
    "missing.section1.title": "Archive Room 7",
    "missing.section1.body": "These drawers do not lack content by accident. They reveal what kinds of Ming lives were not treated as archival priorities.",
    "missing.drawer1.state": "locked drawer",
    "missing.drawer1.title": "Corvée complaints",
    "missing.drawer1.note": "No surviving full petition.",
    "missing.drawer2.state": "locked drawer",
    "missing.drawer2.title": "Palace maid letters",
    "missing.drawer2.note": "Not preserved in the central archive.",
    "missing.drawer3.state": "opened",
    "missing.drawer3.title": "Kiln injuries",
    "missing.drawer3.note": "Recorded as breakage, compensation, or labor shortage rather than lived testimony.",
    "missing.drawer4.state": "locked drawer",
    "missing.drawer4.title": "Canal worker migration",
    "missing.drawer4.note": "Scattered across local paperwork; no stable central file.",
    "missing.drawer5.state": "locked drawer",
    "missing.drawer5.title": "Women's workshop labor",
    "missing.drawer5.note": "Merged into household or production totals.",
    "missing.drawer6.state": "opened",
    "missing.drawer6.title": "Deaths without names",
    "missing.drawer6.note": "Numbers preserved, individuals largely absent.",
    "missing.drawer7.state": "locked drawer",
    "missing.drawer7.title": "Dockside disputes",
    "missing.drawer7.note": "Filed as disorder, not as social history.",
    "missing.drawer8.state": "locked drawer",
    "missing.drawer8.title": "Transport worker families",
    "missing.drawer8.note": "No person-level indexing.",
    "missing.section2.eyebrow": "Thesis wall",
    "missing.section2.title": "The Blank Is Produced",
    "missing.section2.body": "The final page strips away confidence and leaves only an administrative wall of omission.",
    "missing.fragment1": "corvée testimony missing",
    "missing.fragment2": "palace servant correspondence not preserved",
    "missing.fragment3": "women's workshop labor unarchived",
    "missing.fragment4": "canal migration records incomplete",
    "missing.fragment5": "oral histories absent",
    "missing.fragment6": "death counts without names",
    "missing.fragment7": "household labor absorbed into tax tables",
    "missing.fragment8": "draft labor petitions lost in transfer",
    "missing.fragment9": "recorded only as quantity",
    "missing.fragment10": "never entered into the main index",

    "footer.index.left": "The Ming archive begins with power.",
    "footer.index.right": "Proceed to missing records",
    "footer.figures.left": "These are the names the archive promotes to the surface.",
    "footer.figures.right": "View uncatalogued Ming lives",
    "footer.workers.left": "This is where Ming history loses its confidence.",
    "footer.workers.right": "See who built the great works",
    "footer.projects.left": "Ming projects are remembered as visions before they are remembered as labor.",
    "footer.projects.right": "Enter the blank archive room",
    "footer.missing.left": "The archive ends by exposing its own method.",
    "footer.missing.right": "Return to the official entrance",

    "search.emptyTitle": "Ming Figure Identifier",
    "search.emptyBody": "Try a famous Ming name such as Zhu Yuanzhang, Zheng He, Yongle Emperor, Zhang Juzheng, Qi Jiguang, or Hai Rui.",
    "search.confirmedTitle": "High-confidence match found",
    "search.confirmedName": "Archive subject",
    "search.confirmedRole": "Role",
    "search.confirmedYears": "Years",
    "search.confirmedWhy": "Why this person is remembered",
    "search.confirmedBias": "What the archive still obscures",
    "search.query": "Query",
    "search.notFoundTitle": "No high-confidence match in the curated Ming canon",
    "search.notFoundBody": "This does not prove the person is not from the Ming. It means this front-end classifier does not recognize the name as one of the featured Ming figures in the archive.",
    "search.suggestionTitle": "Closest archive suggestions",
    "search.noSuggestion": "No close featured figure found."
  },
  zh: {
    "brand.title": "明代生命档案馆",
    "brand.subtitle": "明朝历史数字档案库",
    "nav.home": "首页",
    "nav.figures": "伟人档案",
    "nav.projects": "历史工程",
    "nav.missing": "空白档案室",
    "nav.workers": "未编目材料",

    "index.title": "明代生命档案馆",
    "index.description": "一个聚焦明朝权力、工程与普通劳动者缺失记录的五页档案网站。",
    "index.hero.eyebrow": "帝国展陈顺序",
    "index.hero.titleLine1": "明代生命",
    "index.hero.titleLine2": "档案馆",
    "index.hero.lead": "进入一个经过精心修饰的明朝档案馆：皇帝、战役、宫殿建设、下西洋与国家改革被整齐展示。首页之所以显得完整，是因为官方历史本来就被设计成完整的样子。",
    "index.chip.1.label": "王朝时间线",
    "index.chip.1.value": "洪武开国、永乐扩张、中期改革、晚明危机",
    "index.chip.2.label": "帝国肖像",
    "index.chip.2.value": "开国皇帝、内阁重臣、航海使节、边防将领",
    "index.chip.3.label": "国家工程",
    "index.chip.3.value": "紫禁城、漕运、长城防务、御窑瓷器",
    "index.chip.4.label": "官方关键词",
    "index.chip.4.value": "中兴、秩序、朝贡、改革、纪律、盛世",
    "index.note.1.title": "紫禁城",
    "index.note.1.body": "宫殿几何、礼制秩序、北方权力与王朝永固。",
    "index.note.1.annotation": "它由无名工匠、搬运者与徭役劳动者建成。",
    "index.note.2.title": "下西洋",
    "index.note.2.body": "由太监提督的远航、外交、规模、声望与海上触角。",
    "index.note.2.annotation": "水手与码头工人的可见度远低于郑和本人。",
    "index.note.3.title": "长城军镇",
    "index.note.3.body": "防御、统帅、边疆秩序、军事才能与战略眼光。",
    "index.note.3.annotation": "长城很有名，劳役征发却不出名。",
    "index.note.4.title": "景德镇御窑",
    "index.note.4.body": "御用瓷器、精致审美、宫廷需求与完美工艺。",
    "index.note.4.annotation": "窑工主要出现在配额、破损记录和税役表里。",
    "index.subtleLink": "劳动辅助档案",
    "index.authority.badge": "精选记录",
    "index.authority.title": "作为官方记忆的明朝",
    "index.authority.body": "宫廷图像、京师工程、精英传记与军事叙事占据了档案中心。",
    "index.search.eyebrow": "档案分类器",
    "index.search.title": "明朝人物识别器",
    "index.search.body": "输入中文、英文或拼音姓名。这个分类器会判断该名字是否能映射到本档案中收录的著名明朝人物。",
    "index.search.tag.1": "朱元璋",
    "index.search.tag.2": "永乐帝",
    "index.search.tag.3": "郑和",
    "index.search.tag.4": "张居正",
    "index.search.placeholder": "输入一个明代人物",
    "index.search.button": "识别",
    "index.notice.label": "边缘备注",
    "index.notice.body": "这个分类器更容易识别著名名字，而不容易识别普通人。这不只是技术限制，本身也是这个网站的论点之一。",
    "index.section1.eyebrow": "首页叙事",
    "index.section1.title": "明代官方历史首先展示什么",
    "index.section1.body": "首页刻意做得丰盛：皇帝容易被浏览，改革容易被赞美，国家成就容易被索引。",
    "index.timeline.1.label": "开国者",
    "index.timeline.1.body": "朱元璋与开国叙事被给予清晰的顺序、目标与意义。",
    "index.timeline.2.label": "扩张",
    "index.timeline.2.body": "永乐朝的宫廷、船队与迁都工程被呈现为可辨认的帝王意志。",
    "index.timeline.3.label": "改革",
    "index.timeline.3.body": "精英官员被记住为秩序的作者，而不是抽取制度的管理者。",
    "index.timeline.4.label": "繁荣",
    "index.timeline.4.body": "商业活力被展示为华丽表面，而不是数百万人的劳动结果。",
    "index.section2.eyebrow": "被埋藏的导航",
    "index.section2.title": "档案把什么边缘化了",
    "index.section2.body": "劳动没有获得与宫廷历史同等的版面尊严。导航的等级本身就复写了记忆的等级。",
    "index.record.1.label": "辅助档案 01",
    "index.record.1.title": "宫殿木料搬运工",
    "index.record.1.body": "曾为十五世纪早期京师重建运输木材，没有个人档案存留。",
    "index.record.1.status": "主要痕迹：运输点数单与口粮发放记录",
    "index.record.2.label": "辅助档案 02",
    "index.record.2.title": "御窑女工，姓名未录",
    "index.record.2.body": "只在景德镇产量记录与破损赔偿表中出现。",
    "index.record.2.status": "档案状态：局部烧损 / 工资痕迹不完整",
    "index.record.3.label": "辅助档案 03",
    "index.record.3.title": "漕运劳工队",
    "index.record.3.body": "作为粮道维护劳力定额被统计，没有任何个人条目被建立。",
    "index.record.3.status": "档案注记：按数量索引，而非按人物索引",

    "figures.title": "伟人档案 | 明代生命档案馆",
    "figures.hero.eyebrow": "授权传记",
    "figures.hero.title": "明朝伟人档案",
    "figures.hero.body": "这个页面刻意保持完整。每位人物都拥有姓名、年代、官职、成就与稳定的历史位置。",
    "figures.section1.eyebrow": "正典记录",
    "figures.section1.title": "档案清楚记住的人",
    "figures.section1.body": "人物的选择本身就是一种历史判断：开国者、皇帝、使节、改革者、将领与清官被保存为清晰可辨的主体。",
    "meta.years": "年份",
    "meta.achievement": "成就",
    "meta.status": "历史地位",
    "meta.reference": "文献引用",
    "figures.card1.role": "开国皇帝",
    "figures.card1.name": "朱元璋",
    "figures.card1.years": "1328-1398",
    "figures.card1.achievement": "1368 年建立明朝，并以洪武帝身份重组帝国统治结构。",
    "figures.card1.status": "开国者、纪律制定者、王朝秩序的恢复者。",
    "figures.card1.reference": "《明太祖实录》、开国诏令、赋税与军籍档案。",
    "figures.card1.quote": "“王朝从秩序开始。”",
    "figures.card2.role": "皇帝",
    "figures.card2.name": "朱棣（永乐帝）",
    "figures.card2.years": "1360-1424",
    "figures.card2.achievement": "将政治中心移至北京，并主持紫禁城建设与下西洋工程。",
    "figures.card2.status": "帝国扩张与中央奇观的设计者。",
    "figures.card2.reference": "永乐朝实录、迁都与营建档案、宫廷奏疏。",
    "figures.card2.quote": "“帝国通过规模而变得可见。”",
    "figures.card3.role": "使节统帅",
    "figures.card3.name": "郑和",
    "figures.card3.years": "1371-1433",
    "figures.card3.achievement": "率领宝船队将明朝权力投射到印度洋世界。",
    "figures.card3.status": "海上扩张与外交表演的象征。",
    "figures.card3.reference": "航海碑刻、宦官档案、朝贡使团记录。",
    "figures.card3.quote": "“舰队首先记住的是统帅。”",
    "figures.card4.role": "内阁首辅",
    "figures.card4.name": "张居正",
    "figures.card4.years": "1525-1582",
    "figures.card4.achievement": "在万历初年推动财政与行政改革。",
    "figures.card4.status": "精英改革者，国家能力的管理者。",
    "figures.card4.reference": "奏疏汇编、科举档案、改革文书。",
    "figures.card4.quote": "“改革挂在一个名字下，负担却落在许多人身上。”",
    "figures.card5.role": "将领",
    "figures.card5.name": "戚继光",
    "figures.card5.years": "1528-1588",
    "figures.card5.achievement": "统领抗倭与边防工程，并撰写兵书。",
    "figures.card5.status": "纪律化防务的模范统帅。",
    "figures.card5.reference": "战报、《纪效新书》、边军档案。",
    "figures.card5.quote": "“防务保住疆域，但士兵很少保住叙事。”",
    "figures.card6.role": "清官",
    "figures.card6.name": "海瑞",
    "figures.card6.years": "1514-1587",
    "figures.card6.achievement": "成为晚明道德批评、廉洁行政与敢谏精神的象征。",
    "figures.card6.status": "官僚体系中的严峻良心。",
    "figures.card6.reference": "奏疏、地方行政档案、后世道德传记。",
    "figures.card6.quote": "“清廉最容易在事后被纪念碑化。”",
    "figures.section2.eyebrow": "对比装置",
    "figures.section2.title": "这些传记为什么对论点重要",
    "figures.section2.body": "这个页面必须庄重完整，这样工人页面的匮乏才能被看见：没有肖像，没有引语，没有清晰作者性，也没有耐久叙事。",

    "workers.title": "无名劳动者 | 明代生命档案馆",
    "workers.hero.eyebrow": "残缺记录",
    "workers.hero.title": "明朝无名劳动者",
    "workers.hero.body": "在这里，档案裂解成了碎片：工资残页、窑场记数、漕运名册与没有姓名的伤亡数字。",
    "workers.section1.eyebrow": "核心档案",
    "workers.section1.title": "劳动记录",
    "workers.section1.body": "那些建造、搬运、烧制、缝制与运输明朝权力的人，大多没有被保存成完整主体，他们只以痕迹存在。",
    "workers.card1.label": "工人档案 1406-01",
    "workers.card1.title": "姓名：不详的宫殿工",
    "workers.card1.body1": "职业：北京宫殿工程木料搬运工。",
    "workers.card1.body2": "贡献：在紫禁城营建期间搬运梁木。",
    "workers.card1.status": "主要痕迹：口粮发放单与运输点数单",
    "workers.card2.label": "窑场记录 J-118",
    "workers.card2.title": "御窑劳动中的女性",
    "workers.card2.body1": "职业：景德镇洗选、整理或收尾工序劳动者。",
    "workers.card2.body2": "贡献：只在产量册与破损罚赔表中出现。",
    "workers.card2.status": "档案状态：边缘缺损 / 无个人姓名",
    "workers.card3.label": "漕运记录 07",
    "workers.card3.title": "粮运劳工分队",
    "workers.card3.body1": "职业：纤夫、河道维护工与船务劳工。",
    "workers.card3.body2": "贡献：维持京师粮运体系。",
    "workers.card3.status": "档案注记：按定额列示，不按人物列示",
    "workers.card4.label": "边墙劳役单",
    "workers.card4.title": "长城修缮徭役者",
    "workers.card4.body1": "职业：北方防线上的征发建筑劳工。",
    "workers.card4.body2": "贡献：修补军镇附近石墙与夯土工事。",
    "workers.card4.status": "仅以人数被记录",
    "workers.card5.label": "作坊便条 S-22",
    "workers.card5.title": "失名丝织工",
    "workers.card5.body1": "职业：江南宫廷纺织劳动者。",
    "workers.card5.body2": "贡献：被吸收到礼服生产配额中。",
    "workers.card5.status": "档案状态：局部污损 / 无户籍细节",
    "workers.card6.label": "码头名册 N-09",
    "workers.card6.title": "宝船队码头工",
    "workers.card6.body1": "职业：绳索、装卸与仓储劳动。",
    "workers.card6.body2": "贡献：协助郑和船队的大规模启航准备。",
    "workers.card6.status": "主要痕迹：港口库存单与工资残片",
    "workers.section2.eyebrow": "界面故障",
    "workers.section2.title": "文件打开错误",
    "workers.section2.body": "损坏的界面是故意的：现代网站撞上了一个从未打算让这些人被完整检索的历史档案系统。",
    "workers.fragment1.state": "文件损坏",
    "workers.fragment1.body": "运河劳工的抱怨出现在府级备忘录中，附件缺失。",
    "workers.fragment2.state": "图像不可用",
    "workers.fragment2.body": "没有肖像、没有印记、没有纪念性面貌。",
    "workers.fragment3.state": "元数据不完整",
    "workers.fragment3.body": "工人按工种索引，而不是按人物索引。",
    "workers.fragment4.state": "访问被拒绝",
    "workers.fragment4.body": "徭役请愿被抄进报告，原件未保存。",
    "workers.fragment5.state": "字段为空",
    "workers.fragment5.body": "死亡数字存在，姓名不存在。",

    "projects.title": "历史工程 | 明代生命档案馆",
    "projects.hero.eyebrow": "纪念性工程",
    "projects.hero.title": "明朝历史工程",
    "projects.hero.body": "每个条目都先以帝国成就的语言出现。展开之后，劳役征发、作坊配额、工伤和缺失的姓名才会显露出来。",
    "projects.section1.eyebrow": "双层阅读",
    "projects.section1.title": "纪念碑及其背后的人",
    "projects.section1.body": "明朝的伟大往往通过完工的建筑和精英决策来叙述。这一页要求重新打开其下方的劳动。",
    "projects.summary": "展开另一层记录",
    "projects.card1.kicker": "京师营建",
    "projects.card1.title": "紫禁城",
    "projects.card1.body": "官方记忆把北京宫殿群写成建筑秩序的可见化。",
    "projects.card1.counter1": "大规模的木材、石料、砖料与运输劳动支撑了宫殿工程。",
    "projects.card1.counter2": "徭役征发与供应链远没有下令的皇帝那样被个体化。",
    "projects.card1.counter3": "纪念物留下了赞助者的名字，劳动则多半变成了物流。",
    "projects.card2.kicker": "帝国物流",
    "projects.card2.title": "漕运",
    "projects.card2.body": "国家叙事把它表述为行政效率与京师供给安全。",
    "projects.card2.counter1": "船工、纤夫、疏浚工、仓储人员与修理队共同填满这个系统。",
    "projects.card2.counter2": "档案对粮食总量的保存，比对劳动者传记的保存更可靠。",
    "projects.card2.counter3": "系统故障被写成供应问题，而不是人的疲惫。",
    "projects.card3.kicker": "边防工程",
    "projects.card3.title": "长城修缮与军镇工事",
    "projects.card3.body": "传统叙事赞美的是战略、统帅与北方防御。",
    "projects.card3.counter1": "士兵、罪徒、被征发农民与运输劳工共同承担了防线工程。",
    "projects.card3.counter2": "将领保持可见，一线劳动保持模糊。",
    "projects.card3.counter3": "伤亡与口粮数字比姓名更容易留下来。",
    "projects.card4.kicker": "宫廷制造",
    "projects.card4.title": "景德镇御窑",
    "projects.card4.body": "档案欣赏的是精致、完美审美与宫廷品味。",
    "projects.card4.counter1": "窑工、淘泥工、画工、装箱工与运输劳工使这种精致成为可能。",
    "projects.card4.counter2": "这个系统对配额、破损与御用需求的记录极其精密。",
    "projects.card4.counter3": "工人本人反而比瓷器更难被检索出来。",

    "missing.title": "空白档案室 | 明代生命档案馆",
    "missing.hero.eyebrow": "档案空洞",
    "missing.hero.title": "空白档案室",
    "missing.hero.body": "空白并非自然形成。它来自明朝国家如何细致记录、后世如何索引，以及机构决定保存什么。",
    "missing.section1.eyebrow": "关闭的抽屉",
    "missing.section1.title": "档案室 7",
    "missing.section1.body": "这些抽屉的空缺并非偶然。它们显露出哪些明代生命从未被视为档案优先级。",
    "missing.drawer1.state": "抽屉锁定",
    "missing.drawer1.title": "徭役抱怨",
    "missing.drawer1.note": "没有完整请愿书存留。",
    "missing.drawer2.state": "抽屉锁定",
    "missing.drawer2.title": "宫女书信",
    "missing.drawer2.note": "没有进入中央档案。",
    "missing.drawer3.state": "已打开",
    "missing.drawer3.title": "窑场工伤",
    "missing.drawer3.note": "它们被记录成破损、赔偿或劳动力短缺，而不是活生生的证词。",
    "missing.drawer4.state": "抽屉锁定",
    "missing.drawer4.title": "漕工迁移",
    "missing.drawer4.note": "分散在地方文书中，没有稳定的中央卷宗。",
    "missing.drawer5.state": "抽屉锁定",
    "missing.drawer5.title": "女性作坊劳动",
    "missing.drawer5.note": "被并入家庭或生产总数之中。",
    "missing.drawer6.state": "已打开",
    "missing.drawer6.title": "没有姓名的死亡",
    "missing.drawer6.note": "数字被保存了下来，个体则没有。",
    "missing.drawer7.state": "抽屉锁定",
    "missing.drawer7.title": "码头纠纷",
    "missing.drawer7.note": "被归入治安问题，而非社会史。",
    "missing.drawer8.state": "抽屉锁定",
    "missing.drawer8.title": "运输工家庭",
    "missing.drawer8.note": "没有人物层级的索引。",
    "missing.section2.eyebrow": "命题之墙",
    "missing.section2.title": "空白是被制造出来的",
    "missing.section2.body": "最后一页剥离掉所有自信，只留下行政性缺失构成的一面墙。",
    "missing.fragment1": "徭役证词缺失",
    "missing.fragment2": "宫廷仆役通信未被保存",
    "missing.fragment3": "女性作坊劳动未入档",
    "missing.fragment4": "漕工迁移记录不完整",
    "missing.fragment5": "口述历史缺席",
    "missing.fragment6": "死亡数字没有姓名",
    "missing.fragment7": "家庭劳动被吸收到税表中",
    "missing.fragment8": "劳役请愿在移交中遗失",
    "missing.fragment9": "仅以数量形式被记录",
    "missing.fragment10": "从未进入主索引",

    "footer.index.left": "明代档案从权力开始。",
    "footer.index.right": "进入空白档案室",
    "footer.figures.left": "这些名字被档案推到了表面。",
    "footer.figures.right": "查看未被编目的明代生命",
    "footer.workers.left": "明代历史在这里失去它的自信。",
    "footer.workers.right": "看看是谁建成了这些伟业",
    "footer.projects.left": "明朝工程总是先被记成愿景，后被记成劳动。",
    "footer.projects.right": "进入空白档案室",
    "footer.missing.left": "档案馆最终暴露了自己的方法。",
    "footer.missing.right": "回到官方入口",

    "search.emptyTitle": "明朝人物识别器",
    "search.emptyBody": "试试输入著名明代人物，如朱元璋、郑和、永乐帝、张居正、戚继光或海瑞。",
    "search.confirmedTitle": "已找到高置信匹配",
    "search.confirmedName": "档案主体",
    "search.confirmedRole": "身份",
    "search.confirmedYears": "年代",
    "search.confirmedWhy": "为什么这个人被记住",
    "search.confirmedBias": "档案仍然遮蔽了什么",
    "search.query": "检索词",
    "search.notFoundTitle": "在本馆收录的明代正典人物中未找到高置信匹配",
    "search.notFoundBody": "这并不证明此人不是明朝人物，只意味着这个前端分类器没有把这个名字识别为本站重点收录的著名明代人物。",
    "search.suggestionTitle": "最接近的档案建议",
    "search.noSuggestion": "没有找到接近的重点人物。"
  }
};

const pageMeta = {
  index: {
    titleKey: "index.title",
    descriptionKey: "index.description"
  },
  figures: { titleKey: "figures.title" },
  workers: { titleKey: "workers.title" },
  projects: { titleKey: "projects.title" },
  missing: { titleKey: "missing.title" }
};

const mingFigures = [
  {
    aliases: ["zhu yuanzhang", "hongwu", "hongwu emperor", "ming taizu", "朱元璋", "洪武帝", "明太祖"],
    enName: "Zhu Yuanzhang (Hongwu Emperor)",
    zhName: "朱元璋（洪武帝）",
    enRole: "Founding emperor of the Ming",
    zhRole: "明朝开国皇帝",
    years: "1328-1398",
    enWhy: "Founded the Ming in 1368 and rebuilt imperial governance after the Yuan collapse.",
    zhWhy: "1368 年建立明朝，并在元末崩解之后重建帝国治理。",
    enBias: "The archive remembers the founder more clearly than the military households, taxpayers, and labor drafts that sustained his order.",
    zhBias: "档案记住了开国者，却没有同样清楚地记住支撑其秩序的军户、纳税者与徭役劳动。"
  },
  {
    aliases: ["zhu di", "yongle", "yongle emperor", "chengzu", "朱棣", "永乐帝", "明成祖"],
    enName: "Zhu Di (Yongle Emperor)",
    zhName: "朱棣（永乐帝）",
    enRole: "Emperor of expansion and monumental construction",
    zhRole: "扩张与巨型营建的皇帝",
    years: "1360-1424",
    enWhy: "Shifted the capital to Beijing, sponsored the Forbidden City, and backed the treasure voyages.",
    zhWhy: "迁都北京，主持紫禁城建设，并支持下西洋。",
    enBias: "The emperor's will is vivid; the transport chains, labor drafts, and construction deaths are much less visible.",
    zhBias: "皇帝的意志非常清晰，而运输链条、徭役征发与施工死亡则模糊得多。"
  },
  {
    aliases: ["zheng he", "cheng ho", "郑和", "sanbao eunuch", "三宝太监"],
    enName: "Zheng He",
    zhName: "郑和",
    enRole: "Admiral of the treasure voyages",
    zhRole: "下西洋船队统帅",
    years: "1371-1433",
    enWhy: "Led the famous maritime expeditions that projected Ming power across the Indian Ocean.",
    zhWhy: "率领著名的远洋航行，将明朝权力投射到印度洋世界。",
    enBias: "The admiral remains central; sailors, dock workers, shipbuilders, and port labor stay peripheral.",
    zhBias: "郑和始终位于中心，而水手、码头工、造船工与港口劳工则停留在边缘。"
  },
  {
    aliases: ["zhang juzheng", "chang chu-cheng", "张居正"],
    enName: "Zhang Juzheng",
    zhName: "张居正",
    enRole: "Grand Secretary and reformer",
    zhRole: "首辅与改革者",
    years: "1525-1582",
    enWhy: "Directed major fiscal and administrative reforms in the early Wanli era.",
    zhWhy: "在万历初年主持重要的财政与行政改革。",
    enBias: "The archive emphasizes elite reform design more than the taxpayers, clerks, couriers, and local enforcers who carried it out.",
    zhBias: "档案强调精英如何设计改革，却弱化了纳税者、书吏、驿卒与地方执行者。"
  },
  {
    aliases: ["qi jiguang", "chi chi-kuang", "戚继光"],
    enName: "Qi Jiguang",
    zhName: "戚继光",
    enRole: "General and military author",
    zhRole: "名将与兵书作者",
    years: "1528-1588",
    enWhy: "Known for anti-pirate campaigns and for commanding disciplined troops on the frontier.",
    zhWhy: "以抗倭与边防练兵闻名。",
    enBias: "The commander is easily remembered; ordinary soldiers and laborers in the defensive system are not.",
    zhBias: "统帅很容易被记住，而防务体系中的普通士兵与劳工并不容易。"
  },
  {
    aliases: ["hai rui", "hai jui", "海瑞"],
    enName: "Hai Rui",
    zhName: "海瑞",
    enRole: "Moral official and remonstrator",
    zhRole: "清官与谏官象征",
    years: "1514-1587",
    enWhy: "Remembered as a severe and incorruptible official in late-Ming political memory.",
    zhWhy: "在晚明政治记忆中被记成严厉而廉洁的官员。",
    enBias: "The moral exemplar survives; the governed people whose burdens made moral protest meaningful are harder to recover.",
    zhBias: "清官形象被保存下来，而使这种道德批评具有意义的被治理者负担却更难恢复。"
  }
];

const normalize = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[\s'".,()-]/g, "");

const getLanguage = () => localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;

const t = (key, language) => translations[language][key] || translations.en[key] || key;

const applyLanguage = (language) => {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n, language);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder, language));
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll("[data-fill-en][data-fill-zh]").forEach((button) => {
    button.dataset.fill = language === "zh" ? button.dataset.fillZh : button.dataset.fillEn;
  });

  const pageKey = document.body.dataset.page;
  const meta = pageMeta[pageKey];
  if (meta?.titleKey) {
    document.title = t(meta.titleKey, language);
  }
  if (meta?.descriptionKey) {
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", t(meta.descriptionKey, language));
    }
  }

  document.querySelectorAll(".glitch-line[data-i18n]").forEach((element) => {
    const content = t(element.dataset.i18n, language);
    element.setAttribute("data-alt", content);
  });

  document.querySelectorAll("[data-ming-search]").forEach((form) => {
    renderSearchResult(form, form.querySelector("input").value);
  });
};

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;
    localStorage.setItem(STORAGE_KEY, language);
    applyLanguage(language);
  });
});

const findFigure = (query) => {
  const normalized = normalize(query);
  if (!normalized) {
    return { type: "empty" };
  }

  for (const figure of mingFigures) {
    if (figure.aliases.some((alias) => normalize(alias) === normalized)) {
      return { type: "match", figure };
    }
  }

  for (const figure of mingFigures) {
    if (figure.aliases.some((alias) => normalize(alias).includes(normalized) || normalized.includes(normalize(alias)))) {
      return { type: "match", figure };
    }
  }

  const suggestions = mingFigures
    .filter((figure) => figure.aliases.some((alias) => normalize(alias).includes(normalized.slice(0, 3)) || normalized.includes(normalize(alias).slice(0, 3))))
    .slice(0, 3);

  return { type: "miss", suggestions };
};

const renderSearchResult = (form, query) => {
  const language = getLanguage();
  const output = form.querySelector("[data-search-output]");
  const results = form.querySelector("[data-search-results]");
  const analysis = findFigure(query);

  if (analysis.type === "empty") {
    output.innerHTML = `<strong>${t("search.emptyTitle", language)}</strong><span>${t("search.emptyBody", language)}</span>`;
    results.innerHTML = "";
    return;
  }

  if (analysis.type === "match") {
    const { figure } = analysis;
    const name = language === "zh" ? figure.zhName : figure.enName;
    const role = language === "zh" ? figure.zhRole : figure.enRole;
    const why = language === "zh" ? figure.zhWhy : figure.enWhy;
    const bias = language === "zh" ? figure.zhBias : figure.enBias;

    output.innerHTML = `<strong>${t("search.confirmedTitle", language)}</strong><span>${t("search.query", language)}: ${query}</span>`;
    results.innerHTML = `
      <div><strong>${t("search.confirmedName", language)}:</strong> ${name}</div>
      <div><strong>${t("search.confirmedRole", language)}:</strong> ${role}</div>
      <div><strong>${t("search.confirmedYears", language)}:</strong> ${figure.years}</div>
      <div><strong>${t("search.confirmedWhy", language)}:</strong> ${why}</div>
      <div><strong>${t("search.confirmedBias", language)}:</strong> ${bias}</div>
    `;
    return;
  }

  output.innerHTML = `<strong>${t("search.notFoundTitle", language)}</strong><span>${t("search.query", language)}: ${query}</span>`;

  if (analysis.suggestions.length) {
    const suggestionNames = analysis.suggestions
      .map((figure) => `<div>${language === "zh" ? figure.zhName : figure.enName}</div>`)
      .join("");
    results.innerHTML = `<div><strong>${t("search.suggestionTitle", language)}:</strong></div>${suggestionNames}<div>${t("search.notFoundBody", language)}</div>`;
    return;
  }

  results.innerHTML = `<div>${t("search.noSuggestion", language)}</div><div>${t("search.notFoundBody", language)}</div>`;
};

document.querySelectorAll("[data-ming-search]").forEach((form) => {
  const input = form.querySelector("input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderSearchResult(form, input.value);
  });

  form.querySelectorAll("[data-fill-en][data-fill-zh]").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.fill;
      renderSearchResult(form, input.value);
    });
  });
});

applyLanguage(getLanguage());

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
  revealObserver.observe(element);
});

const parallaxNodes = [...document.querySelectorAll("[data-parallax]")];

const updateParallax = () => {
  const viewportHeight = window.innerHeight || 1;
  parallaxNodes.forEach((node) => {
    const speed = Number(node.dataset.parallax || 0);
    const rect = node.getBoundingClientRect();
    const delta = (rect.top + rect.height / 2 - viewportHeight / 2) * speed;
    node.style.transform = `translate3d(0, ${delta}px, 0)`;
  });
};

if (parallaxNodes.length) {
  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
  window.addEventListener("resize", updateParallax);
}
