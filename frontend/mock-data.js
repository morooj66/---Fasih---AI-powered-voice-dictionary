// ?????? ????? ???????? ????? ?? backend/data/lexicon.json.
// ???????? ???? ??? ?? ??? ??????? ??????.
const mockData = [
  {
    "word": "رصين",
    "root": "ر-ص-ن",
    "meaning": "ثابت ومحكم، يدل على الاتزان والعقل والوقار.",
    "synonyms": [
      "متين",
      "وقور",
      "متزن",
      "رزين"
    ],
    "antonyms": [
      "طائش",
      "خفيف",
      "متهور"
    ],
    "example": "كان حديثه رصيناً وواضحاً.",
    "source": "ويكاموس"
  },
  {
    "word": "بصيرة",
    "root": "ب-ص-ر",
    "meaning": "إدراك وفهم عميق للأمور يتجاوز النظر الظاهر.",
    "synonyms": [
      "فطنة",
      "حكمة",
      "وعي",
      "تبصر"
    ],
    "antonyms": [
      "غفلة",
      "جهل"
    ],
    "example": "تحتاج القرارات المهمة إلى بصيرة.",
    "source": "ويكاموس"
  },
  {
    "word": "استنباط",
    "root": "غير متوفر",
    "meaning": "انظر \"استدلال استنباطي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deduction.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حكمة",
    "root": "ح-ك-م",
    "meaning": "إصابة الحق في القول والعمل وحسن التصرف في الأمور.",
    "synonyms": [
      "رشد",
      "تبصر",
      "عقل"
    ],
    "antonyms": [
      "سفه",
      "طيش"
    ],
    "example": "تعاملت المعلمة مع الموقف بحكمة.",
    "source": "بيانات تجريبية"
  },
  {
    "word": "اختبار أ/ب",
    "root": "غير متوفر",
    "meaning": "طريقة إحصائية لمقارنة أسلوبين أو أكثر؛ لتحديد أي منهما يعمل بطريقة أفضل، وفهم ما إذا كان الاختلاف ذا دلالة إحصائية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: A/B Testing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استخلاص",
    "root": "غير متوفر",
    "meaning": "انظر \"استدلال استخلاصي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Abduction.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "برمجة منطقية استخلاصية",
    "root": "غير متوفر",
    "meaning": "إطار يجمع بين البرمجة المنطقية والاستدلال الاستخلاصي؛ لتوليد تفسيرات أو فرضيات معقولة للبيانات أو الأحداث المرصودة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Abductive Logic Programming (ALP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استدلال استخلاصي",
    "root": "غير متوفر",
    "meaning": "عملية استنتاج نتائج محتملة بناءً على معلومات معروفة. ويُطلق عليها أيضًا \"استخلاص\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Abductive Reasoning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دراسة استئصالية",
    "root": "غير متوفر",
    "meaning": "اختبار علمي يُستخدم لتحليل أداء نموذج ما عن طريق إزالة بعض مُكوِّناته أو تعطيلها بطريقة منهجية وتقييم تأثير ذلك في الأداء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ablation Study.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نوع بيانات مجرد",
    "root": "غير متوفر",
    "meaning": "مجموعة من قيم البيانات والعمليات ذات الصلة التي تكون مستقلة عن أي تنفيذ.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Abstract Datatype.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مسؤولية",
    "root": "غير متوفر",
    "meaning": "حالة من المسؤولية عن شيء ما بناءً على التنظيم أو الاتفاق أو التعيين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Accountability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دقة",
    "root": "غير متوفر",
    "meaning": "معدل التنبؤات الصحيحة التي يقدمها نموذج التصنيف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Accuracy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فعل",
    "root": "غير متوفر",
    "meaning": "آلية في التعلُّم التعزيزي، ينتقل بها الوكيل بين حالات البيئة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Action.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم نموذج الأفعال",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من تعلُّم الآلة، يتعلم فيه وكلاء الذكاء الاصطناعي فهم تأثيرات أفعالهم في بيئة ما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Action Model Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعرُّف على الأفعال",
    "root": "غير متوفر",
    "meaning": "مهمة في رؤية الحاسب تُحلِّل الفيديوهات لتحديد الأفعال البشرية. ويُطلق عليها أيضًا \"تعرُّف على الأفعال البشرية\" أو \"تعرُّف على النشاط البشري\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Action Recognition.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اختيار الفعل",
    "root": "غير متوفر",
    "meaning": "عملية تحديد ما يجب أن يقوم به الوكيل في الخطوة التالية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Action Selection.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة تنشيط",
    "root": "غير متوفر",
    "meaning": "صيغة رياضية تُستخدم في الشبكة العصبية الاصطناعية؛ لمعالجة المُدْخَلات الموزونة للعُقَد وتوليد المخرجات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Activation Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خريطة التنشيط",
    "root": "غير متوفر",
    "meaning": "انظر \"خريطة الخصائص\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Activation Map.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم نشط",
    "root": "غير متوفر",
    "meaning": "طريقة تعلُّم شبه موجَّه، يمكن للخوارزمية فيها اختيار بعض البيانات للتعلُّم منها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Active Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر نشطة",
    "root": "غير متوفر",
    "meaning": "طريقة لتكييف نموذج على مهام محددة عن طريق اختيار الأسئلة الأكثر غموضًا، وتوصيفها باستخدام أوامر متعلقة بالمهام وتسلسل الأفكار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Active Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توجيه الإعلانات",
    "root": "غير متوفر",
    "meaning": "طريقة إعلانية متقدمة تستهدف الجمهور الأكثر تقبلًا للعروض. ويُطلق عليها أيضًا \"إعلان موجَّه\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ad Targeting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدرج تَّكَيُّفيّ (أدا جراد)",
    "root": "غير متوفر",
    "meaning": "خوارزمية متقدمة للنزول التدرجي، تُنفِّذ التدرج عن طريق معرفة أشكال البيانات من تكرارات سابقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: AdaGrad.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط المُكيِّف",
    "root": "غير متوفر",
    "meaning": "أسلوب ضبط دقيق يضيف طبقات صغيرة قابلة للتدريب إلى نموذج مُدرَّب سابقًا، ويُحدِّث فقط مُعامِلات هذه الطبقات؛ لتكييف النموذج على مهام محددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Adapter Tuning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية تَكَيُّفيَّة",
    "root": "غير متوفر",
    "meaning": "خوارزمية تغير سلوكها في وقت التشغيل بناءً على المعلومات المتاحة، والمعايير المحددة سابقًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Adaptive Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعزيز تَّكَيُّفيّ",
    "root": "غير متوفر",
    "meaning": "أسلوب تعزيز يجمع بين عدد من المصنِّفات الضعيفة؛ لإنشاء مصنِّف قوي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Adaptive Boosting (AdaBoost).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حَوْكمة تَكَيُّفيَّة للبيانات",
    "root": "غير متوفر",
    "meaning": "طريقة مرنة لحوكمة البيانات، تركز على التعديل المستمر؛ لتلبية التغيرات في احتياجات العمل والمتطلبات التنظيمية والتقنيات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Adaptive Data Governance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم الآلة التَّكَيُّفيّ",
    "root": "غير متوفر",
    "meaning": "طريقة لتحديث نماذج تعلُّم الآلة وإعادة تدريبها تدريجيًّا؛ للتَّكَيُّف مع التغيرات الجديدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Adaptive Machine Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام استنتاج عصبي-ضبابي تَّكَيُّفيّ",
    "root": "غير متوفر",
    "meaning": "أسلوب يجمع بين المنطق الضبابي والشبكات العصبية؛ لتحسين أداء التنبؤ وقابليته للتطبيق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Adaptive Neuro-Fuzzy Inference System (ANFIS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إرشادية مقبولة",
    "root": "غير متوفر",
    "meaning": "دالة لا تبالغ في تقدير تكلفة الوصول إلى الهدف في خوارزمية البحث.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Admissible Heuristic.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أنظمة مساعدة السائق المتقدمة",
    "root": "غير متوفر",
    "meaning": "انظر \"مساعدة السائق\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Advanced Driver Assistance Systems (ADAS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مثال عدائي",
    "root": "غير متوفر",
    "meaning": "مُدْخَلات صُمِّمت عمدًا لخداع نموذج تعلُّم الآلة، ودفعه لارتكاب الأخطاء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Adversarial Example.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم الآلة العدائي",
    "root": "غير متوفر",
    "meaning": "مجال يركز على تصميم خوارزميات فاعلة لتعلُّم الآلة؛ لأجل مواجهة التحديات الأمنية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Adversarial Machine Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر عدائية",
    "root": "غير متوفر",
    "meaning": "أسلوب لصياغة أوامر مصممة لتضليل النموذج أو التلاعب به؛ لإنتاج مخرجات ضارة أو غير مرغوب فيها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Adversarial Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة عاطفية",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من الذكاء الاصطناعي يهتم بتطوير أنظمة قادرة على التعرُّف على المشاعر البشرية ومعالجتها. ويُطلق عليه أيضًا \"ذكاء اصطناعي عاطفي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Affective Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وكيل",
    "root": "غير متوفر",
    "meaning": "كيان مادي أو برمجي يمكنه إدراك بيئته، والعمل بتحكم ذاتي لتحقيق هدف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Agent.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معمارية الوكيل",
    "root": "غير متوفر",
    "meaning": "مخطط لنظام التحكم الخاص بالوكيل، يوضح مُكوِّنات التحكم والتنظيم الوظيفي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Agent Architecture.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع تكتُّلي",
    "root": "غير متوفر",
    "meaning": "طريقة لإنشاء شجرة هرمية عن طريق تعيين كل مثال في مجموعته، ودمج أقرب المجموعات بصورة تَكرارية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Agglomerative Clustering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية",
    "root": "غير متوفر",
    "meaning": "مجموعة من التعليمات المحددة لحل مشكلة ما، أو أداء مهمة معينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية في الحلقة",
    "root": "غير متوفر",
    "meaning": "إطار تعاوني لاتخاذ القرار، يستفيد من الخوارزميات لتحسين عملية اتخاذ القرار البشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Algorithm in the Loop.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نفور من الخوارزميات",
    "root": "غير متوفر",
    "meaning": "الميل البشري إلى تجنب استخدام الخوارزميات أو عدم الثقة فيها؛ حتى عندما تتفوق على الأداء البشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Algorithmic Aversion.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز خوارزمي",
    "root": "غير متوفر",
    "meaning": "انظر \"تحيُّز الذكاء الاصطناعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Algorithmic Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "كفاءة خوارزمية",
    "root": "غير متوفر",
    "meaning": "مقياس لحساب متوسط الوقت اللازم للخوارزمية لتنفذ العمل كاملًا على مجموعة من البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Algorithmic Efficiency.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية التعلُّم الخوارزمي",
    "root": "غير متوفر",
    "meaning": "مجال من مجالات نظرية التعلُّم الحوسبي التي تُحلل حدود التعلُّم بطُرُق غير إحصائية وغير احتمالية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Algorithmic Learning Theory.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "احتمال خوارزمي",
    "root": "غير متوفر",
    "meaning": "طريقة لتعيين احتمالية سابقة للأشياء. ويُطلق عليها أيضًا \"احتمالية سولومونوف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Algorithmic Probability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء محيطي",
    "root": "غير متوفر",
    "meaning": "بيئة رقمية مراعية للأشخاص، وداعمة لحياتهم اليومية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ambient Intelligence (AmI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي تناظري",
    "root": "غير متوفر",
    "meaning": "نوع من الذكاء الاصطناعي يستخدم مبادئ الحوسبة التناظرية وأنظمتها؛ لتصميم وتنفيذ خوارزميات ونماذج الذكاء الاصطناعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Analog Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات تناظرية",
    "root": "غير متوفر",
    "meaning": "بيانات ممثلة بشكل مستمر ومتغير، على عكس البيانات الرقمية التي تُمثَّل بشكل منفصل وثنائي (أي: 0 و1).",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Analog Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم عميق تناظري",
    "root": "غير متوفر",
    "meaning": "طريقة تستخدم الحوسبة والأجهزة التناظرية لإجراء العمليات الحسابية المطلوبة لمهام التعلُّم العميق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Analog Deep Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل الخوارزميات",
    "root": "غير متوفر",
    "meaning": "عملية تحديد التعقيد الحوسبي للخوارزميات وأدائها؛ وذلك من أجل تقييم مدى ملاءمة تطبيقاتها، أو مقارنتها بخوارزميات أخرى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Analysis of Algorithms.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "منصة تحليلات",
    "root": "غير متوفر",
    "meaning": "حل تقني موحد يتيح إجراء الدورة الكاملة لعمليات التحليلات، ويشمل: إعداد البيانات ومعالجتها وتخزينها وإدارتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Analytics Platform.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إطار مرجعي",
    "root": "غير متوفر",
    "meaning": "إطار تحديد بارتفاع وعرض محددين سابقًا، يساعد في اكتشاف الأشياء المتداخلة والأشياء ذات المقاييس المختلفة داخل الصورة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Anchor Box.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُوَصِّف",
    "root": "غير متوفر",
    "meaning": "عامل يساعد في تسمية البيانات (مثل الصور) عند الطلب. يُطلق عليه أيضًا \"مُسمِّي\" أو \"مُقيِّم\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Annotator.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اكتشاف الشذوذ",
    "root": "غير متوفر",
    "meaning": "عملية تحديد المشاهدات غير المعتادة أو غير الطبيعية في البيانات؛ نظرًا لخصائصها المختلفة عن غالبية البيانات المعالجة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Anomaly Detection.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "برمجة مجموعة الإجابات",
    "root": "غير متوفر",
    "meaning": "نوع من البرمجة التصريحية لحل مشكلات البحث المعقدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Answer Set Programming (ASP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية فورية",
    "root": "غير متوفر",
    "meaning": "خوارزمية تعطي نتيجة صالحة حتى لو قوطعت قبل انتهائها، وتتحسن جودة نتائجها تدريجيًّا ما دامت تعمل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Anytime Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إدارة بيانات التطبيقات",
    "root": "غير متوفر",
    "meaning": "عملية الحوكمة والتأمين والصيانة للبيانات المستخدمة بواسطة تطبيقات برمجية محددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Application Data Management (ADM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "واجهة برمجة التطبيقات",
    "root": "غير متوفر",
    "meaning": "مجموعة من القواعد والبروتوكولات التي تُتيح للتطبيقات البرمجية المختلفة التواصل والتفاعل بعضها مع بعض.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Application Programming Interface (API).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مطابقة تقريبية للسلاسل",
    "root": "غير متوفر",
    "meaning": "عملية العثور على تطابق تقريبي للسلاسل بدلًا من المطابقة التامة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Approximate String Matching.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خطأ التقريب",
    "root": "غير متوفر",
    "meaning": "الفرق بين القيمة الحقيقية والقيمة المقدرة بواسطة النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Approximation Error.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مساحة تحت منحنى دقّة الأداء",
    "root": "غير متوفر",
    "meaning": "مقياس أداء يُستخدم لتقييم قدرة نموذج التصنيف الثنائي على التمييز بين الأصناف الإيجابية والسلبية عبر جميع حدود التصنيف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Area under the ROC Curve (AUC).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إطار الحُجج",
    "root": "غير متوفر",
    "meaning": "شبكة تشتمل على عُقَد تُمثِّل الحُجج، وحافات تُمثِّل التعارضات بين هذه الحُجج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Argumentation Framework.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء عام اصطناعي",
    "root": "غير متوفر",
    "meaning": "نظام حوسبي يمكنه أداء أي مهمة فكرية يمكن للإنسان أداؤها، مثل: حل المشكلات والإبداع والقدرة على التَّكَيُّف. ويُطلق عليه أيضًا \"ذكاء اصطناعي عام\"، أو \"ذكاء اصطناعي قوي\"، أو \"ذكاء اصطناعي واسع\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial General Intelligence (AGI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام المناعة الاصطناعي",
    "root": "غير متوفر",
    "meaning": "نظام تَكَيُّفيّ لحل المشكلات، مستوحى من جهاز المناعة البشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Immune System (AIS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي",
    "root": "غير متوفر",
    "meaning": "مجال من مجالات علوم الحاسب يركز على بناء أنظمة قادرة على أداء مهام تتطلب عادةً ذكاءً بشريًّا، مثل: التعلُّم والاستدلال والتطوير الذاتي. ويُطلق عليه أيضًا \"ذكاء الآلة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence (AI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مواءمة الذكاء الاصطناعي",
    "root": "غير متوفر",
    "meaning": "عملية جعل أنظمة الذكاء الاصطناعي تعمل بطرق تتماشى مع الأهداف والقيم الإنسانية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence Alignment.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي كخدمة",
    "root": "غير متوفر",
    "meaning": "خدمة قائمة على السحابة، توفر إمكانات الذكاء الاصطناعي وأدواته، جاهزة للاستخدام من الأفراد والمؤسسات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence as a Service (AIaaS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز الذكاء الاصطناعي",
    "root": "غير متوفر",
    "meaning": "تفضيل أو انحياز نظام الذكاء الاصطناعي لمجموعات ما على حساب مجموعات أخرى. ويُطلق عليه أيضًا \"تحيُّز خوارزمي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أخلاقيات الذكاء الاصطناعي",
    "root": "غير متوفر",
    "meaning": "مجموعة من القيم والمبادئ والأساليب لتوجيه السلوك الأخلاقي في تطوير تقنيات الذكاء الاصطناعي واستخدامها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence Ethics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوكمة الذكاء الاصطناعي",
    "root": "غير متوفر",
    "meaning": "السياسات والمبادئ والممارسات التي تضمن التطوير والاستخدام المسؤول والأخلاقي والآمن للذكاء الاصطناعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence Governance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هلوسة الذكاء الاصطناعي",
    "root": "غير متوفر",
    "meaning": "حالة يولِّد فيها نموذج الذكاء الاصطناعي نتائج غير صحيحة أو مضللة أو غير منطقية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence Hallucination.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لغة ترميز الذكاء الاصطناعي",
    "root": "غير متوفر",
    "meaning": "لغة ترميزية مبنية على لغة الترميز الموسعة (XML)؛ لتطوير تطبيقات اللغات الطبيعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence Markup Language (AIML).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي للعمليات",
    "root": "غير متوفر",
    "meaning": "تطبيق تقنيات الذكاء الاصطناعي لأتمتة عمليات تشغيل تقنية المعلومات وتحسينها، مثل: المراقبة والتحليل والإدارة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence Operations (AIOps).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تخطيط الذكاء الاصطناعي",
    "root": "غير متوفر",
    "meaning": "فرع من فروع الذكاء الاصطناعي يهتم باختيار مجموعة من الأفعال المناسبة لتحقيق هدف معين. ويُطلق عليه أيضًا \"تخطيط وجدولة مؤتمتة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence Planning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام ذكاء اصطناعي",
    "root": "غير متوفر",
    "meaning": "نظام قادر على أداء مهام تتطلب عادةً ذكاءً بشريًّا، مثل: التعلُّم والاستدلال والتطوير الذاتي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Intelligence System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء ضيق اصطناعي",
    "root": "غير متوفر",
    "meaning": "نوع من أنظمة الذكاء الاصطناعي قادر على تنفيذ مهام محددة فقط. ويُطلق عليه أيضًا \"ذكاء اصطناعي ضيق\" أو \"ذكاء اصطناعي ضعيف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Narrow Intelligence (ANI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية اصطناعية",
    "root": "غير متوفر",
    "meaning": "نموذج حوسبي في الذكاء الاصطناعي مستوحى من الشبكات العصبية البيولوجية لأدمغة الحيوانات. ويُطلق عليه أيضًا \"شبكة عصبية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Neural Network (ANN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خلية عصبية اصطناعية",
    "root": "غير متوفر",
    "meaning": "انظر \"خلية عصبية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Neuron.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي خارق",
    "root": "غير متوفر",
    "meaning": "انظر \"ذكاء خارق\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Superintelligence (ASI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ناقل عصبي اصطناعي",
    "root": "غير متوفر",
    "meaning": "انظر \"ناقل عصبي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Artificial Synapse.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "جمعية النهوض بالذكاء الاصطناعي",
    "root": "غير متوفر",
    "meaning": "جمعية علمية غير ربحية مُكرَّسة للنهوض بالبحث العلمي، والتثقيف العام، وتدريب الممارسين، والحث على الاستخدام المسؤول للذكاء الاصطناعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Association for the Advancement of Artificial Intelligence (AAAI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم ترابطي",
    "root": "غير متوفر",
    "meaning": "أسلوب من أساليب تعلُّم الآلة قائم على قواعد لاكتشاف العلاقات المهمة بين الخصائص أو المتغيرات في مجموعة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Associative Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "آلية الانتباه",
    "root": "غير متوفر",
    "meaning": "انظر \"نموذج الانتباه\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Attention Mechanism.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج الانتباه",
    "root": "غير متوفر",
    "meaning": "أسلوب في الشبكة العصبية يُتيح للشبكة التركيز على جانب واحد من المُدْخَلات المعقدة في كل مرة حتى تُصنَّف مجموعة البيانات بأكملها. ويُطلق عليه أيضًا \"آلية الانتباه\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Attention Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سمة",
    "root": "غير متوفر",
    "meaning": "صفة أو ميزة لشيء ما بمقدور البشر أو الطُّرُق المؤتمتة التعرُّف عليها، وغالبًا ما تستخدم كمرادف لكلمة \"خاصية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Attribute.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة الإشارات الصوتية",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من معالجة الإشارات يركز على تحليل الإشارات الصوتية ومعالجتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Audio Signal Processing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قابلية التدقيق",
    "root": "غير متوفر",
    "meaning": "القدرة على مراجعة البيانات والعمليات واتخاذ القرارات في نظام الذكاء الاصطناعي وتقييمها؛ لضمان الشفافية والمساءلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Auditability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات مُعَزَّزة",
    "root": "غير متوفر",
    "meaning": "استخدام تقنيات الذكاء الاصطناعي لأتمتة عمليات تحليلات البيانات، مثل: إعداد البيانات واكتشاف الرؤى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Augmented Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "جودة البيانات المُعَزَّزة",
    "root": "غير متوفر",
    "meaning": "استخدام تقنيات الذكاء الاصطناعي لأتمتة عمليات جودة البيانات، وتحسين دقة البيانات واتساقها وموثوقيتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Augmented Data Quality.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء مُعزَّز",
    "root": "غير متوفر",
    "meaning": "نمط تصميمي يُكمِّل الذكاء البشري، ويساعد البشر ليكونوا أذكى وأسرع في أداء المهام. ويُطلق عليه أيضًا \"تعزيز الذكاء\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Augmented Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بحث مُعزَّز",
    "root": "غير متوفر",
    "meaning": "تطبيق الذكاء الاصطناعي في تحليل البيانات واختبار الفرضيات؛ لدعم البحث في المجالات المختلفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Augmented Research.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج انحدار ذاتي",
    "root": "غير متوفر",
    "meaning": "نموذج يتنبأ بالقيم المستقبلية بناءً على القيم السابقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Auto-Regressive Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُرمِّز تلقائي",
    "root": "غير متوفر",
    "meaning": "نوع من الشبكات العصبية الاصطناعية يُستخدم لإنتاج تمثيلات بيانات فاعلة للتعلُّم غير الموجَّه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Autoencoder.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صحافة مؤتمتة",
    "root": "غير متوفر",
    "meaning": "انظر \"صحافة روبوتية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Automated Journalism.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم الآلة المؤتمت",
    "root": "غير متوفر",
    "meaning": "عملية أتمتة مهام تعلُّم الآلة؛ لبناء النماذج وتدريبها واختبارها ونشرها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Automated Machine Learning (AutoML).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تخطيط وجدولة مؤتمتة",
    "root": "غير متوفر",
    "meaning": "انظر \"تخطيط الذكاء الاصطناعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Automated Planning and Scheduling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استدلال مؤتمت",
    "root": "غير متوفر",
    "meaning": "عملية توفر إطارًا منظمًا لخوارزميات تعلُّم الآلة؛ لأجل تحديد المشكلات وحلها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Automated Reasoning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مركبة مؤتمتة",
    "root": "غير متوفر",
    "meaning": "انظر \"مركبة ذاتية التحكم\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Automated Vehicle.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعرُّف تلقائي على الكلام",
    "root": "غير متوفر",
    "meaning": "انظر \"تعرُّف على الكلام\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Automatic Speech Recognition (ASR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تلخيص تلقائي",
    "root": "غير متوفر",
    "meaning": "عملية اختصار جزء من اللغات الطبيعية مع الحفاظ على الدلالات المهمة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Automatic Summarization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أتمتة",
    "root": "غير متوفر",
    "meaning": "عملية أو نظام يعمل دون تدخل بشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Automation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز الأتمتة",
    "root": "غير متوفر",
    "meaning": "تفضيل صانع القرار البشري التوصيات التي ينتجها نظام صنع قرار مؤتمت على المعلومات التي تُنتَج بدون أتمتة، حتى عندما يرتكب نظام صنع القرار المؤتمت أخطاء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Automation Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة ذاتية",
    "root": "غير متوفر",
    "meaning": "قدرة النظام على إدارة موارده دون تدخل المستخدم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Autonomic Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سيارة ذاتية التحكم",
    "root": "غير متوفر",
    "meaning": "انظر \"سيارة ذاتية القيادة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Autonomous Car.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قيادة ذاتية",
    "root": "غير متوفر",
    "meaning": "عملية استشعار المحيط والتحرك بتحكم واكتفاء ذاتي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Autonomous Driving.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت ذاتي التحكم",
    "root": "غير متوفر",
    "meaning": "روبوت يؤدي المهام بدرجة عالية من التحكم الذاتي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Autonomous Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام ذاتي التحكم",
    "root": "غير متوفر",
    "meaning": "نظام يعمل بتحكم ذاتي، ويؤدي المهام، ويتخذ القرارات دون تدخل بشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Autonomous System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مركبة ذاتية التحكم",
    "root": "غير متوفر",
    "meaning": "مركبة قادرة على استشعار محيطها والتحرك بتحكم واكتفاء ذاتي. ويُطلق عليها أيضًا \"مركبة مؤتمتة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Autonomous Vehicle.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحكم ذاتي",
    "root": "غير متوفر",
    "meaning": "قدرة النظام على العمل وفقًا لقواعده وطُرُق تعلُّمه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Autonomy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج الانحدار الذاتي",
    "root": "غير متوفر",
    "meaning": "نموذج يتنبأ بالقيمة المستقبلية لمتغير ما، بناءً على قِيَمه السابقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Autoregressive Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توفُّر",
    "root": "غير متوفر",
    "meaning": "خاصية إمكانية الوصول عند الطلب من كيان معتمد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Availability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ربط متوسط",
    "root": "غير متوفر",
    "meaning": "طريقة تجميع تحسب المسافة بين مجموعتين عن طريق متوسط ​​المسافة بين جميع أزواج نقاط البيانات من كل مجموعة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Average Linkage.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "متوسط الإحكام",
    "root": "غير متوفر",
    "meaning": "مقياس يلخص أداء تسلسل مُرتَّب للنتائج عن طريق حساب متوسط قيم الدقة لكل نتيجة ذات صلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Average Precision.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انتشار عكسي",
    "root": "غير متوفر",
    "meaning": "خوارزمية تُستخدم عند تدريب الشبكات العصبية الاصطناعية لتقليل الأخطاء عن طريق إيجاد قيمة التدرج المطلوب لحساب أوزان الشبكة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Backpropagation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انتشار عكسي عبر الزمن",
    "root": "غير متوفر",
    "meaning": "طريقة لتطبيق الانتشار العكسي على الشبكات العصبية التكرارية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Backpropagation Through Time (BPTT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسلسل خلفي",
    "root": "غير متوفر",
    "meaning": "طريقة استدلال منطقي تعمل بطريقة عكسية؛ من الهدف إلى تحديد البيانات أو الإثباتات المؤيِّدة لذلك الهدف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Backward Chaining.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حقيبة كلمات",
    "root": "غير متوفر",
    "meaning": "تمثيل للكلمات في نص يصف تكرارها داخل مستند، بغض النظر عن ترتيبها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bag of Words.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج أساس",
    "root": "غير متوفر",
    "meaning": "نموذج مُدرَّب على كمية هائلة من البيانات ويمكن تكييفه على مجموعة واسعة من المهام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Foundation Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حُزمة",
    "root": "غير متوفر",
    "meaning": "مجموعة من الأمثلة المستخدمة لتدريب النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Batch.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استنتاج حُزَمي",
    "root": "غير متوفر",
    "meaning": "انظر \"استنتاج غير مباشر\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Batch Inference.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسوية الحُزمة",
    "root": "غير متوفر",
    "meaning": "أسلوب تعلُّم موجَّه لتحسين أداء الشبكة العصبية واستقرارها عن طريق تحويل مخرجات الطبقة البينية إلى صيغة موحدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Batch Normalization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة الحُزمة",
    "root": "غير متوفر",
    "meaning": "معالجة مجموعة من البيانات أو البرامج بأقل قدر من التفاعل البشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Batch Processing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حجم الحُزمة",
    "root": "غير متوفر",
    "meaning": "عدد العيِّنات التي تُمرَّر إلى نموذج تعلُّم الآلة في كل تكرار لتدريب النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Batch Size.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قانون بايز",
    "root": "غير متوفر",
    "meaning": "انظر \"نظرية بايز\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bayes's Law.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة بايز",
    "root": "غير متوفر",
    "meaning": "انظر \"نظرية بايز\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bayes’s Rule.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية بايز",
    "root": "غير متوفر",
    "meaning": "صيغة رياضية لحساب الاحتمالات الشرطية التي تصف احتمالية وقوع حدث ما، بناءً على حدث سابق. ويُطلق عليها أيضًا \"قانون بايز\" أو \"قاعدة بايز\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bayes's Theorem.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة بايزية",
    "root": "غير متوفر",
    "meaning": "نموذج شبكي يمثل المتغيرات وتوابعها الشرطية باستخدام الاستنتاج البايزي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bayesian Network.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية بايزية",
    "root": "غير متوفر",
    "meaning": "شبكة عصبية احتمالية تعتمد على نظرية بايز لحساب أوجه عدم التيقن في الأوزان والمخرجات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bayesian Neural Network.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "برمجة بايزية",
    "root": "غير متوفر",
    "meaning": "طريقة إحصائية لبناء نماذج احتمالية، وحل المشكلات المفتوحة ذات المعلومات غير المكتملة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bayesian Programming.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية النحل",
    "root": "غير متوفر",
    "meaning": "خوارزمية تحاكي سلوك أسراب النحل في العثور على الغذاء عن طريق البحث العشوائي، ويمكن استخدامها لحل مشكلات التحسين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bees Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معلوماتية السلوك",
    "root": "غير متوفر",
    "meaning": "مجال يهتم بجمع البيانات غير المتجانسة وتحليلها وتفسيرها؛ لتمثيل السلوك البشري ونمذجته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Behavior Informatics (BI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شجرة السلوك",
    "root": "غير متوفر",
    "meaning": "طريقة لهيكلة التبديل بين الأفعال المختلفة في وكيل ذاتي التحكم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Behavior Tree (BT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات سلوكية",
    "root": "غير متوفر",
    "meaning": "عملية استخدام البيانات المتعلقة بسلوكيات المستخدمين؛ لفهم نواياهم وأفعالهم والتنبؤ بها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Behavioral Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج برمجي للمعتقدات والرغبات والمقاصد",
    "root": "غير متوفر",
    "meaning": "إطار لتصميم وتنفيذ وكلاء أذكياء يحاكون البشر في الاستدلال واتخاذ القرارات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Belief-Desire-Intention Software Model (BDI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معادلة بلمان",
    "root": "غير متوفر",
    "meaning": "صيغة رياضية تكرارية تُستخدم في عدد من خوارزميات التعلُّم التعزيزي؛ لحساب المكافأة الإجمالية المتوقعة إثر القيام بالفعل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bellman Equation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز",
    "root": "غير متوفر",
    "meaning": "مُعامِل في الشبكة العصبية يُتيح للخلايا العصبية تحويل دالة التنشيط.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية تخفيف التحيز",
    "root": "غير متوفر",
    "meaning": "خوارزمية مصممة لتقليل التحيزات داخل مجموعات البيانات أو نماذج الذكاء الاصطناعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bias Mitigation Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "موازنة التحيُّز-التباين",
    "root": "غير متوفر",
    "meaning": "تعارض ينشأ عند محاولة تقليل التحيُّز والتباين، يمنع الخوارزميات الموجَّهة من التعميم خارج مجموعة التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bias–Variance Tradeoff.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تمثيلات الترميز الثنائية الاتجاه من المُحوِّلات (بيرت)",
    "root": "غير متوفر",
    "meaning": "أسلوب تعلُّم عميق يعتمد على معمارية المُحوِّلات؛ لمعالجة اللغات الطبيعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bidirectional Encoder Representations From Transformers (BERT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج لغوي ثنائي الاتجاه",
    "root": "غير متوفر",
    "meaning": "نموذج يحدد احتمالية وجود كلمة في نص ما بناءً على النص الذي يأتي قبلها وبعدها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bidirectional Language Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات ضخمة",
    "root": "غير متوفر",
    "meaning": "مجموعة بيانات كبيرة تتطلب تقنيات قابلة للتوسع لتخزينها ومعالجتها وإدارتها وتحليلها؛ نظرًا لخصائص حجمها وتنوعها وسرعتها وتباينها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Big Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات البيانات الضخمة",
    "root": "غير متوفر",
    "meaning": "عملية فحص كمية كبيرة من البيانات المتنوعة؛ لاكتشاف الأنماط والارتباطات والاتجاهات التي تُقدِّم رؤى وتدعم اتخاذ القرار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Big Data Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء البيانات الضخمة",
    "root": "غير متوفر",
    "meaning": "استخدام تقنيات الذكاء الاصطناعي لتحليل مجموعات البيانات الكبيرة المعقدة وتفسيرها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Big Data Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "رمز (أُو) الكبرى",
    "root": "غير متوفر",
    "meaning": "مقياس نظري للوقت أو الذاكرة اللازمين لتنفيذ الخوارزمية بالنظر إلى حجم المشكلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Big O Notation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدات ثنائية",
    "root": "غير متوفر",
    "meaning": "تسلسل من عنصرين في نص ما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bigram.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقييم ثنائي اللغة",
    "root": "غير متوفر",
    "meaning": "مقياس لتقييم جودة النص المترجم تلقائيًّا من لغة إلى أخرى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bilingual Evaluation Understudy (BLEU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف ثنائي",
    "root": "غير متوفر",
    "meaning": "نوع من أنواع التصنيف يتنبأ بفئة واحدة فقط من بين صنفين محتملين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Binary Classification.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شجرة ثنائية",
    "root": "غير متوفر",
    "meaning": "هيكل شجري، كل عقدة فيه تحتوي على عقدتين فرعيتين على الأكثر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Binary Tree.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع صناديق",
    "root": "غير متوفر",
    "meaning": "انظر \"تجميع وحدات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Binning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قياسات حيوية",
    "root": "غير متوفر",
    "meaning": "الخصائص الجسدية والسلوكية القابلة للقياس التي يمكن استخدامها لتحديد هوية الأفراد والتحقق منها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Biometrics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صندوق أسود",
    "root": "غير متوفر",
    "meaning": "استعارة تُستخدم لوصف نظام أو خوارزمية ذات بنية داخلية غير معروفة أو أعمال غير ظاهرة؛ تؤدي إلى عدم فهم كيفية عملها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Black Box.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "آلة بولتزمان",
    "root": "غير متوفر",
    "meaning": "شبكة عصبية من العُقَد المتصلة المتماثلة، وتتخذ قراراتها الخاصة بشأن التنشيط.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Boltzmann Machine.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعزيز",
    "root": "غير متوفر",
    "meaning": "طريقة تعلُّم تجميعي تُستخدم في تعلُّم الآلة لتحسين دقة النماذج التنبؤية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Boosting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع بوتستراب",
    "root": "غير متوفر",
    "meaning": "طريقة تعلُّم تجميعي تُستخدم لتحسين الاستقرار والدقة في نماذج التصنيف والانحدار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bootstrap Aggregating (Bagging).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بوت",
    "root": "غير متوفر",
    "meaning": "برنامج مؤتمت يؤدي مهامَّ متكررة؛ لمحاكاة النشاط البشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إطار تحديد",
    "root": "غير متوفر",
    "meaning": "إحداثيات تحدد إطارًا مستطيلًا يحيط بمنطقة معينة أو شيء ما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bounding Box.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عامل التفرع",
    "root": "غير متوفر",
    "meaning": "عدد العُقَد الفرعية التي تُولِّدها العقدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Branching Factor.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي واسع",
    "root": "غير متوفر",
    "meaning": "انظر \"ذكاء عام اصطناعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Broad Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بث",
    "root": "غير متوفر",
    "meaning": "طريقة في تعلُّم الآلة لمطابقة أبعاد المصفوفات ذات الأحجام المختلفة، وإتاحة إجراء عمليات حسابية بين تلك المصفوفات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Broadcasting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بحث القوة الغاشمة",
    "root": "غير متوفر",
    "meaning": "أسلوب لحل مشكلة ما عن طريق تجربة جميع الحلول الممكنة حتى العثور على الحل المناسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Brute Force Search.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع وحدات",
    "root": "غير متوفر",
    "meaning": "عملية تحويل خاصية مستمرة إلى خاصية ثنائية متعددة تُسمَّى وحدات؛ بناءً على نطاق من القيم. ويُطلق عليها أيضًا \"تجميع صناديق\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Bucketing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تباين نصي",
    "root": "غير متوفر",
    "meaning": "التباين في طول الجُمَل وبنيتها في النص.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Burstiness.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء الأعمال",
    "root": "غير متوفر",
    "meaning": "نظام مبني على البيانات، يشتمل على جمع البيانات وتخزينها وتحليلها وتصويرها؛ لدعم اتخاذ القرار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Business Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طبقة المعايرة",
    "root": "غير متوفر",
    "meaning": "تعديل لاحق للتنبؤ؛ لتقليل تحيُّزه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Calibration Layer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توليد الترشيحات",
    "root": "غير متوفر",
    "meaning": "عملية اختيار التوصيات الأولية بواسطة نظام التوصية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Candidate Generation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أخذ عيِّنات المُرشَّحين",
    "root": "غير متوفر",
    "meaning": "طريقة لتحسين التدريب؛ عن طريق حساب الاحتمالات لجميع الأصناف المستهدفة، ولعينة عشوائية من الأصناف الأخرى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Candidate Sampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية كبسولية",
    "root": "غير متوفر",
    "meaning": "شبكة عصبية اصطناعية تتكون من مجموعة من الخلايا العصبية (كبسولات)، تُمثِّل مُعامِلات إنشاء لكيان معين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Capsule Neural Network (CapsNet).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استدلال قائم على الحالة",
    "root": "غير متوفر",
    "meaning": "طريقة لحل مشكلات جديدة باستخدام حلول لمشكلات سابقة مماثلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Case-Based Reasoning (CBR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نسيان كارثي",
    "root": "غير متوفر",
    "meaning": "ظاهرة يفقد فيها النموذج المعلومات التي تعلَّمها سابقًا، وذلك عند تعلُّم مهام جديدة. ويُطلق عليه أيضًا \"تداخل كارثي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Catastrophic Forgetting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تداخل كارثي",
    "root": "غير متوفر",
    "meaning": "انظر \"نسيان كارثي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Catastrophic Interference.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات فئوية",
    "root": "غير متوفر",
    "meaning": "الخصائص التي تشتمل على مجموعة منفصلة من القيم المحتملة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Categorical Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استنتاج سببي",
    "root": "غير متوفر",
    "meaning": "عملية تحديد علاقات السبب والنتيجة بين المتغيرات داخل البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Causal Inference.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج لغوي سببي",
    "root": "غير متوفر",
    "meaning": "انظر \"نموذج لغوي أحادي الاتجاه\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Causal Language Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية الحد المركزي",
    "root": "غير متوفر",
    "meaning": "نظرية تنص على أن توزيع المتوسطات لمشاهدات مستقلة يقترب من نموذج التوزيع الطبيعي كلما أصبح حجم العينة أكبر، بغض النظر عن الشكل الإحصائي لتوزيع المجموعة التي أُخِذت منها العينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Central Limit Theorem.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدة المعالجة المركزية",
    "root": "غير متوفر",
    "meaning": "دائرة إلكترونية تنفذ تعليمات البرنامج، وتتحكم في أداء الحاسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Central Processing Unit (CPU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بؤرة تجميع",
    "root": "غير متوفر",
    "meaning": "مركز مجموعة محدد بواسطة خوارزمية تجميع، مثل: خوارزميات تجميع بالمتوسط أو بالوسيط.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Centroid.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع تمحوري",
    "root": "غير متوفر",
    "meaning": "خوارزمية تجميع، ترتب البيانات في مجموعات غير هرمية تُمثَّل بواسطة مُتَّجه مركزي أو بؤرة تجميع.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Centroid-Based Clustering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة التسلسل",
    "root": "غير متوفر",
    "meaning": "نظرية أساسية في حساب التفاضل والتكامل، توفر طريقة لحساب مشتق دالة مركبة. وتُستخدم أيضًا في الاحتمالات؛ لحساب الاحتمال المشترك لتسلسل من الأحداث.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Chain Rule.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر تسلسل الأفكار",
    "root": "غير متوفر",
    "meaning": "أسلوب لهندسة الأوامر، يحث النموذج على تقسيم المهام المعقدة إلى خطوات أصغر؛ لإظهار عملية الاستدلال.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Chain-of-Thought (CoT) Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بوت محادثة",
    "root": "غير متوفر",
    "meaning": "برنامج ذكاء اصطناعي يستخدم أساليب معالجة اللغات الطبيعية للتفاعل مع المستخدمين عن طريق المحادثات الصوتية أو النصية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Chatbot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نقطة حفظ",
    "root": "غير متوفر",
    "meaning": "حفظ نسخة من متغيرات النموذج في نقطة زمنية معينة، على وجه يُتيح تصدير أوزان النموذج وأداء التدريب عبر جلسات متعددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Checkpoint.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حجم القطعة النصية",
    "root": "غير متوفر",
    "meaning": "عدد الأحرف في قطعة من النص.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Chunk Size.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقطيع",
    "root": "غير متوفر",
    "meaning": "عملية تقسيم كميات كبيرة من النصوص إلى أجزاء أصغر يسهل التحكم فيها تُسمَّى \"القطع\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Chunking.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صنف",
    "root": "غير متوفر",
    "meaning": "اسم يُمثل إحدى الفئات المحددة للتصنيف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Class.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات غير متوازنة الأصناف",
    "root": "غير متوفر",
    "meaning": "مشكلة في التصنيف عندما يكون عدد الأصناف في مجموعة بيانات مختلفًا اختلافًا كبيرًا. ويُطلق عليها أيضًا \"بيانات غير متوازنة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Class-Imbalanced Dataset.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف",
    "root": "غير متوفر",
    "meaning": "نوع من خوارزميات تعلُّم الآلة، تحدد الفئة التي ينتمي إليها مُدْخَل معين. ويُطلق عليه أيضًا \"تصنيف قياسي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Classification.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج تصنيف",
    "root": "غير متوفر",
    "meaning": "نموذج تعلُّم آلة يميز بين صنفين منفصلين أو أكثر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Classification Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حد التصنيف",
    "root": "غير متوفر",
    "meaning": "معيار عددي لتصنيف مشاهدة جديدة إلى تصنيف ثنائي. ويُطلق عليه أيضًا \"حد القرار\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Classification Threshold.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُصنِّف",
    "root": "غير متوفر",
    "meaning": "خوارزمية تُستخدم لتصنيف البيانات إلى مجموعات (أو أصناف) بناءً على الخصائص السلوكية والهيكلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Classifier.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات النقرات",
    "root": "غير متوفر",
    "meaning": "نوع من تحليلات الويب يُستخدم لمراقبة زوار المواقع الإلكترونية وتحليل سلوكهم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Clickstream Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقليم",
    "root": "غير متوفر",
    "meaning": "أسلوب تسوية يُستخدم للتعامل مع القيم الشاذة؛ عن طريق وضع حد أقصى بقيمة ثابتة لجميع قيم الخصائص التي تكون أعلى أو أقل من قيمة محددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Clipping.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة سحابية",
    "root": "غير متوفر",
    "meaning": "أسلوب حوسبي لتمكين الوصول إلى مجموعة قابلة للتوسع من موارد الحاسب المشتركة، مع توفير خدمة ذاتية وإدارة عند الطلب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cloud Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "منظومة بيانات سحابية",
    "root": "غير متوفر",
    "meaning": "بيئة شاملة ومتكاملة مصممة لإدارة البيانات ومعالجتها وتحليلها في الأنظمة السحابية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cloud Data Ecosystem.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "علم الروبوتات السحابية",
    "root": "غير متوفر",
    "meaning": "مجال في علم الروبوتات تستخدم فيه الروبوتات التقنيات السحابية لتوسيع قدراتها، مثل: التخزين والحوسبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cloud Robotics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مجموعة",
    "root": "غير متوفر",
    "meaning": "مجموعة من الأشياء المتشابهة في خصائصها، والمنظَّمة حسب أوجه التشابه بينها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cluster.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل المجموعات",
    "root": "غير متوفر",
    "meaning": "انظر \"تجميع\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cluster Analysis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع",
    "root": "غير متوفر",
    "meaning": "طريقة في تعلُّم الآلة غير الموجَّه لتجميع الأشياء المتشابهة في مجموعات. ويُطلق عليها أيضًا \"تحليل المجموعات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Clustering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تَكَيُّف مشترك",
    "root": "غير متوفر",
    "meaning": "مشكلة في الشبكات العصبية تحدث عندما تعتمد الخلايا العصبية بصورة كبيرة على خلايا عصبية محددة بدلًا من اعتمادها على السلوك العام للشبكة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Co-Adaptation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدريب مشترك",
    "root": "غير متوفر",
    "meaning": "طريقة تعلُّم شبه موجَّه، تُستخدم في التصنيف عندما تكون البيانات غير المُسمَّاة أكثر من البيانات المُسمَّاة، وتشتمل مجموعة البيانات على مجموعتين مستقلتين ومتكاملتين من الخصائص.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Co-Training.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "كوبويب",
    "root": "غير متوفر",
    "meaning": "خوارزمية تجميع تدريجية وغير موجَّهة، تُولِّد تصنيفًا هرميًّا للأصناف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: COBWEB.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُعامِل المتغير",
    "root": "غير متوفر",
    "meaning": "قيمة ثابتة مضروبة بمتغير أو تعبير رياضي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Coefficient.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معمارية إدراكية",
    "root": "غير متوفر",
    "meaning": "فرضية حول البنية الثابتة للعقل البشري أو الاصطناعي والمعرفة والمهارات المُجسَّدة لإنتاج سلوك ذكي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cognitive Architecture.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أتمتة إدراكية",
    "root": "غير متوفر",
    "meaning": "استخدام تقنيات الذكاء الاصطناعي لأتمتة المهام التي تتطلب قدرات إدراكية بشرية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cognitive Automation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة إدراكية",
    "root": "غير متوفر",
    "meaning": "مجال في علوم الحاسب يهدف إلى محاكاة عمليات التفكير البشري في نموذج محوسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cognitive Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "علوم إدراكية",
    "root": "غير متوفر",
    "meaning": "مجال يركز على دراسة العقل وعملياته وكيف يمكن محاكاتها في الآلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cognitive Science.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام إدراكي",
    "root": "غير متوفر",
    "meaning": "نظام يمكنه محاكاة العمليات الإدراكية البشرية، مثل: التعلُّم والاستدلال وحل المشكلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cognitive System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مقياس كوهين كابا",
    "root": "غير متوفر",
    "meaning": "مقياس إحصائي لتقييم درجة الاتفاق بين اثنين من المقيِّمين، أو لتقييم أداء نموذج التصنيف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cohen’s Kappa.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تخزين البيانات غير النشطة",
    "root": "غير متوفر",
    "meaning": "تخزين البيانات التي لا تُستخدم إلا نادرًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cold Data Storage.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي تعاوني",
    "root": "غير متوفر",
    "meaning": "ذكاء اصطناعي مصمم للعمل مع البشر لتحقيق أهداف مشتركة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Collaborative Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصفية تعاونية",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم في أنظمة التوصية للتنبؤ باهتمامات المستخدم بناءً على اهتمامات المستخدمين الآخرين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Collaborative Filtering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت تعاوني",
    "root": "غير متوفر",
    "meaning": "روبوت مُصمَّم للتفاعل المباشر مع الإنسان في بيئة عمل مشتركة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Collaborative Robot (Cobot).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحسين توافقي",
    "root": "غير متوفر",
    "meaning": "عملية إيجاد الحل الأمثل من مجموعة محدودة من الاحتمالات، وذلك عندما يكون البحث الشامل غير ممكن.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Combinatorial Optimization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "آلة تشاركية",
    "root": "غير متوفر",
    "meaning": "نموذج يجمع مخرجات نماذج متعددة للتوصل إلى التنبؤ أو القرار النهائي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Committee Machine.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معرفة بديهية",
    "root": "غير متوفر",
    "meaning": "المعلومات التي تساعد البشر على فهم الأنشطة اليومية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Commonsense Knowledge.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استدلال بديهي",
    "root": "غير متوفر",
    "meaning": "قدرة أنظمة الذكاء الاصطناعي على فهم المواقف اليومية، والاستنتاج منها بطريقة مشابهة للبديهة البشرية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Commonsense Reasoning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ربط كامل",
    "root": "غير متوفر",
    "meaning": "طريقة تجميع تُعرِّف المسافة بين مجموعتين عن طريق أقصى مسافة بين أي زوج من نقاط البيانات من كل مجموعة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Complete Linkage.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات تركيبية للبيانات",
    "root": "غير متوفر",
    "meaning": "طريقة مرنة تتيح تجميع وإعادة استخدام مُكوِّنات البيانات والتحليلات الحالية؛ لإنشاء حلول مخصصة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Composable Data Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي مُرَكَّب",
    "root": "غير متوفر",
    "meaning": "طريقة تجمع بين أساليب الذكاء الاصطناعي المختلفة لإنشاء أنظمة أكثر تقدمًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Composite Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إبداع حوسبي",
    "root": "غير متوفر",
    "meaning": "مجال ناشئ في الذكاء الاصطناعي يركز على قدرة الآلات على توليد مخرجات إبداعية وتقييمها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Computational Creativity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فكاهة حوسبية",
    "root": "غير متوفر",
    "meaning": "فرع من فروع الذكاء الاصطناعي يهتم بنمذجة الفكاهة وتوليدها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Computational Humor.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء حوسبي",
    "root": "غير متوفر",
    "meaning": "مجال دراسة يركز على الدافع البيولوجي واللغوي لتطوير الطُّرُق الحوسبية، ويشمل الشبكات العصبية والأنظمة الضبابية والحوسبة التطورية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Computational Intelligence (CI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية التعلُّم الحوسبي",
    "root": "غير متوفر",
    "meaning": "مجال في الذكاء الاصطناعي يركز على جميع جوانب التصميم لخوارزميات تعلُّم الآلة وتحليلها؛ لتحديد المشكلات التي يمكن تعلُّمها. ويُطلق عليه أيضًا \"نظرية التعلُّم\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Computational Learning Theory.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لغويات حوسبية",
    "root": "غير متوفر",
    "meaning": "مجال علمي يهتم بفهم لغة الإنسان من منظور حوسبي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Computational Linguistics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "علم الأعصاب الحوسبي",
    "root": "غير متوفر",
    "meaning": "مجال يركز على استخدام الأدوات والأساليب الحوسبية لدراسة الدماغ والجهاز العصبي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Computational Neuroscience.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "رؤية الحاسب",
    "root": "غير متوفر",
    "meaning": "مجال في الذكاء الاصطناعي يركز على تحليل البيانات المرئية (صور وفيديوهات) وفهم محتواها. ويُطلق عليه أيضًا \"رؤية الآلة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Computer Vision.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اكتشاف بمساعدة الحاسب",
    "root": "غير متوفر",
    "meaning": "نظام يساعد في مهام التشخيص السريري عن طريق الاكتشاف المؤتمت في السجلات الطبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Computer-Aided Detection (CADe).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انجراف المفهوم",
    "root": "غير متوفر",
    "meaning": "تغيُّر غير متوقع في الخصائص الإحصائية للمتغير المستهدف، يحدث بمرور الوقت.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Concept Drift.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج شَرطي",
    "root": "غير متوفر",
    "meaning": "انظر \"نموذج تمييزي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Conditional Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "احتمال شَرطي",
    "root": "غير متوفر",
    "meaning": "قياس لاحتمال وقوع حدث معين مسبوق بحدث آخر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Conditional Probability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نطاق الثقة",
    "root": "غير متوفر",
    "meaning": "نوع من تقدير النطاق الذي يشتمل على مجموعة من القيم المطلوبة لمطابقة مستوى الثقة في تقدير خصائص البيانات المرصودة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Confidence Interval.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز تأكيدي",
    "root": "غير متوفر",
    "meaning": "الميل إلى تفضيل المعلومات التي تؤكد المعتقدات أو الفرضيات الموجودة سابقًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Confirmation Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مصفوفة الدقة",
    "root": "غير متوفر",
    "meaning": "مصفوفة تلخص أداء نموذج التصنيف، وتوضح مدى نجاح التنبؤات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Confusion Matrix.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تشابكية",
    "root": "غير متوفر",
    "meaning": "نوع من النمذجة الإدراكية يستخدم الشبكات العصبية الاصطناعية؛ لشرح القدرات الفكرية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Connectionism.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي دستوري",
    "root": "غير متوفر",
    "meaning": "طريقة لجعل أنظمة الذكاء الاصطناعي أكثر توافقًا مع القيم والأخلاق الإنسانية؛ عن طريق إنشاء مجموعة من القواعد أو المبادئ توجِّه سلوكها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Constitutional Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تلبية القيود",
    "root": "غير متوفر",
    "meaning": "مشكلة تتعلق باتخاذ القرار مع محدودية الخيارات، والهدف هو تلبية مجموعة معينة من القيود عن طريق إيجاد قيم مجموعة من المتغيرات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Constraint Satisfaction.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مولِّد محتوى",
    "root": "غير متوفر",
    "meaning": "برنامج تعلُّم آلة يُولِّد المحتوى باستخدام أساليب معالجة اللغات الطبيعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Content Generator.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إشراف على المحتوى",
    "root": "غير متوفر",
    "meaning": "مراقبة المحتوى الذي يقدمه المستخدمون، وتطبيق القواعد والإرشادات المحددة سابقًا؛ لتحديد مدى ملاءمته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Content Moderation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصفية قائمة على المحتوى",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم في أنظمة التوصية للتنبؤ باهتمامات المستخدم بناءً على إعجاباته وخصائص العناصر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Content-Based Filtering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طول السياق",
    "root": "غير متوفر",
    "meaning": "الحد الأقصى لعدد الوحدات اللغوية التي يمكن للنموذج اللغوي معالجتها وتذكرها في نفس الوقت.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Context Length.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تضمين سياقي",
    "root": "غير متوفر",
    "meaning": "تمثيل للكلمات يراعي معنى الكلمات بناءً على سياقها داخل النص.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Contextual Embedding.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خاصية مستمرة",
    "root": "غير متوفر",
    "meaning": "خاصية لها عدد لانهائي من القيم الممكنة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Continuous Feature.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدريب سابق تبايني للنصوص والصور",
    "root": "غير متوفر",
    "meaning": "نموذج شبكة عصبية يتعلم ربط الصور بأوصاف نصية عن طريق التدريب على مجموعة بيانات ضخمة من أزواج الصور والنصوص.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Contrastive Language-Image Pre-training (CLIP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم تبايني",
    "root": "غير متوفر",
    "meaning": "أسلوب تعلُّم آلة يتعلم التمثيلات المفيدة عن طريق مقارنة الأمثلة الإيجابية والسلبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Contrastive Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة تباينية",
    "root": "غير متوفر",
    "meaning": "دالة خسارة تشجع النموذج على تعلم عمليات التضمين؛ عن طريق تقليل المسافة بين الأزواج المتشابهة من نقاط البيانات، وتعظيم المسافة بين الأزواج غير المتشابهة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Contrastive Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية التحكم",
    "root": "غير متوفر",
    "meaning": "مجال في الرياضيات التطبيقية يتعامل مع سلوك الأنظمة الديناميكية باستخدام التغذية الراجعة للتأثير في السلوك وتحقيق الهدف المنشود.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Control Theory.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قابلية التحكم",
    "root": "غير متوفر",
    "meaning": "خاصية نظام ذكاء اصطناعي تُمكّن الكيانات الخارجية من التدخل في عمله.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Controllability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أخذ عيِّنات سهلة",
    "root": "غير متوفر",
    "meaning": "طريقة لجمع البيانات من مصادر يمكن الوصول إليها بسهولة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convenience Sampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقارب",
    "root": "غير متوفر",
    "meaning": "الحالة التي يصل إليها النموذج عندما لا يحقق التدريب الإضافي على البيانات الموجودة تحسينًا كبيرًا في النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convergence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي تحاوري",
    "root": "غير متوفر",
    "meaning": "التقنيات التي تستخدم تعلُّم الآلة ومعالجة اللغات الطبيعية لتوفير تفاعل نصي أو صوتي مع المستخدمين يشبه التفاعل الإنساني.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Conversational Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "منصة ذكاء اصطناعي تحاوري",
    "root": "غير متوفر",
    "meaning": "حل برمجي يتيح تطوير واجهات محادثة مدعومة بالذكاء الاصطناعي ونشرها؛ لتسهيل التواصل باللغات الطبيعية بين البشر وأجهزة الحاسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Conversational Artificial Intelligence Platform.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "واجهة مستخدم تحاورية",
    "root": "غير متوفر",
    "meaning": "واجهة مستخدم تتيح للمستخدمين التفاعل مع أجهزة الحاسب بطريقة تشبه المحادثة بين البشر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Conversational User Interface.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة مُحَدَّبة",
    "root": "غير متوفر",
    "meaning": "دالة تكون المنطقة فوق رسمها البياني عبارة عن مجموعة مُحَدَّبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convex Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحسين مُحَدَّب",
    "root": "غير متوفر",
    "meaning": "عملية إيجاد الحد الأدنى من دالة مُحَدَّبة باستخدام أساليب رياضية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convex Optimization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مجموعة مُحَدَّبة",
    "root": "غير متوفر",
    "meaning": "مجموعة فرعية من الفضاء الإقليدي، يظل الخط المرسوم بين أي نقطتين فيها داخل المجموعة الفرعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convex Set.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ترشيح",
    "root": "غير متوفر",
    "meaning": "عملية ترشيح لتدريب الأوزان عن طريق خلط المُرشِّح ومصفوفة المُدْخَلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convolution.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُرشِّح",
    "root": "غير متوفر",
    "meaning": "مُرشِّح يقوم بعمليات الترشيح عن طريق فحص المُدْخَلات مع مراعاة أبعادها. ويُطلق عليه أيضًا \"نواة\" أو \"كاشف الخصائص\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convolutional Filter.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طبقة ترشيحية",
    "root": "غير متوفر",
    "meaning": "طبقة في الشبكة العصبية الترشيحية تستخدم المُرشِّحات لإجراء عمليات الترشيح.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convolutional Layer (or Convolution Layer).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية ترشيحية",
    "root": "غير متوفر",
    "meaning": "نوع من الشبكات العصبية العميقة المستخدمة في إنشاء نماذج لتحليل الصور والفيديوهات ومعالجتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convolutional Neural Network (CNN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عملية ترشيحية",
    "root": "غير متوفر",
    "meaning": "عملية حسابية لضرب شريحة من مصفوفة المُدْخَلات والمُرشِّح، ثم جمع كل القيم في المصفوفة الناتجة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convolutional Operation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خطوة ترشيحية",
    "root": "غير متوفر",
    "meaning": "حجم خطوة تحريك المُرشِّحات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Convolutional Stride.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحديد المرجع",
    "root": "غير متوفر",
    "meaning": "مهمة في معالجة اللغات الطبيعية تتضمن تحديد كل التعبيرات التي تشير إلى نفس الكيان في النص.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Coreference Resolution.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مدونة",
    "root": "غير متوفر",
    "meaning": "مجموعة كبيرة مهيكلة من البيانات النصية أو الصوتية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Corpus.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ارتباط",
    "root": "غير متوفر",
    "meaning": "مقياس إحصائي لمدى الارتباط الرياضي بين متغيرين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Correlation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة التكلفة",
    "root": "غير متوفر",
    "meaning": "انظر \"دالة الخسارة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cost Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تفسير مغاير",
    "root": "غير متوفر",
    "meaning": "طريقة تُستخدم لشرح القرارات التي تتخذها نماذج تعلُّم الآلة؛ عن طريق وصف التغييرات في البيانات المُدْخَلة التي من الممكن أن تؤدي إلى نتائج مختلفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Counterfactual Explanation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إنصاف مغاير",
    "root": "غير متوفر",
    "meaning": "مقياس إنصاف يُقيِّم ما إذا كان المُصنِّف يعطي نفس النتيجة لأفراد متطابقين إلا في سمة حساسة أو أكثر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Counterfactual Fairness.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تباين",
    "root": "غير متوفر",
    "meaning": "مقياس لمدى التباين بين متغيرين غير مرتبطين ببعضهما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Covariance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز التغطية",
    "root": "غير متوفر",
    "meaning": "نوع من تحيُّز الاختيار لا تُمثِّل فيه البيانات المختارة مجموعة العينة المستهدفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Coverage Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة الإنتروبيا التقاطعية",
    "root": "غير متوفر",
    "meaning": "انظر \"خسارة لوغاريثمية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cross-Entropy Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحقق تقاطعي",
    "root": "غير متوفر",
    "meaning": "آلية لتقييم تعميم النموذج على البيانات الجديدة؛ عن طريق اختبار النموذج على مجموعة فرعية واحدة أو أكثر، مأخوذة من مجموعة التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Cross-Validation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم منهجي",
    "root": "غير متوفر",
    "meaning": "إستراتيجية تدريب في تعلُّم الآلة، تُدرِّب النماذج على البيانات بتسلسل ذي معنى، بدءًا من الأمثلة الأسهل، ثم التقدم تدريجيًّا إلى الأمثلة الأكثر صعوبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Curriculum Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مقدِّر مخصَّص",
    "root": "غير متوفر",
    "meaning": "مقدِّر مصمَّم لاتباع توجيهات محددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Custom Estimator.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج مخصَّص",
    "root": "غير متوفر",
    "meaning": "نموذج يقبل المُدْخَلات الخاصة بمستخدم ما، ويُعطي تنبؤات بناءً على تلك المُدْخَلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Custom Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدريب مخصَّص",
    "root": "غير متوفر",
    "meaning": "عملية تدريب النموذج على القيام بتنبؤات معينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Custom Training.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات مظلمة",
    "root": "غير متوفر",
    "meaning": "البيانات التي تجمعها المؤسسات وتعالجها وتخزنها أثناء أنشطة الأعمال العادية، ولكنها لا تستخدمها في أغراض أخرى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dark Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لوحة معلومات",
    "root": "غير متوفر",
    "meaning": "واجهة مستخدم رسومية تجمع المعلومات والتصويرات لعرض المقاييس أو المعايير أو المؤشرات التي تساعد في المراقبة واتخاذ القرار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dashboard.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات",
    "root": "غير متوفر",
    "meaning": "تمثيل للمعلومات بصيغة مناسبة للتخزين أو المعالجة أو النقل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع البيانات",
    "root": "غير متوفر",
    "meaning": "عملية جمع البيانات من عدة مصادر للتحليل أو إعداد التقارير، وتشمل تجميع البيانات أو تلخيصها عن طريق عمليات حسابية، مثل: حساب المجموع أو المتوسط أو الحد الأدنى أو الحد الأقصى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Aggregation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل البيانات",
    "root": "غير متوفر",
    "meaning": "فحص منهجي للبيانات عن طريق العيِّنات والقياس والتصوير.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Analysis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات البيانات",
    "root": "غير متوفر",
    "meaning": "مفهوم يضم عمليات جمع البيانات والتحقق من صحتها ومعالجتها وتصويرها؛ لأجل اكتشاف رؤى مفيدة في اتخاذ القرار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توصيف البيانات",
    "root": "غير متوفر",
    "meaning": "عملية إضافة معلومات وصفية إلى مجموعة البيانات؛ لاستخدامها كمُدْخَلات لنموذج تعلُّم الآلة. ويُطلق عليها أيضًا \"تسمية البيانات\" أو \"تسمية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Annotation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إخفاء بيانات الهوية",
    "root": "غير متوفر",
    "meaning": "عملية تعديل معلومات التعريف الشخصية أو إزالتها من مجموعات البيانات؛ لحماية خصوصية الأفراد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Anonymization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "زيادة البيانات",
    "root": "غير متوفر",
    "meaning": "أسلوب في تعلُّم الآلة لإنشاء بيانات جديدة عن طريق معالجة البيانات الأصلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Augmentation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مركز البيانات",
    "root": "غير متوفر",
    "meaning": "مكان يضم مجموعة من الخوادم وأجهزة تخزين البيانات مع اتصال عالي السرعة؛ لإدارة تطبيقات المؤسسة وبياناتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Center.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف البيانات",
    "root": "غير متوفر",
    "meaning": "عملية تعيين فئات أو أسماء للبيانات بناءً على محتواها أو حساسيتها أو معايير أخرى؛ لتحسين التنظيم والأمن والامتثال.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Classification.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تنظيف البيانات",
    "root": "غير متوفر",
    "meaning": "عملية تصحيح الأخطاء والتناقضات وعدم الدقة في مجموعات البيانات. ويُطلق عليها أيضًا \"تنقية البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Cleansing (or Data Cleaning).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "جمع البيانات",
    "root": "غير متوفر",
    "meaning": "عملية جمع البيانات وقياسها، وتشمل الحصول عليها وتسميتها وتحسينها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Collection.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحكم في البيانات",
    "root": "غير متوفر",
    "meaning": "السياسات والإجراءات والأدوات المستخدمة لإدارة البيانات وحمايتها طوال دورة حياتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Control.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أمين البيانات",
    "root": "غير متوفر",
    "meaning": "شخص أو مؤسسة مسؤولة عن توفير البنية التحتية لتقنية المعلومات وحماية البيانات وفقًا لسياسات حوكمة البيانات وممارساتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Custodian.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تلاعب بالبيانات",
    "root": "غير متوفر",
    "meaning": "تحيُّز إحصائي يحدث عند التلاعب بالبيانات أو تحليلها بطريقة مفرطة للوصول إلى نتائج ذات دلالة إحصائية مع أنها قد لا تكون كذلك. يُطلق عليه أيضًا \"تطفُّل على البيانات\" أو \"تصيُّد في البيانات\" أو \"قرصنة القيمة الاحتمالية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Dredging.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انحراف البيانات",
    "root": "غير متوفر",
    "meaning": "تغيير في توزيع البيانات المُدْخَلة في النموذج، يحدث مع مرور الوقت؛ وقد يؤدي إلى انخفاض أداء النموذج. يُطلق عليه أيضًا \"تغيُّر البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Drift.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هندسة البيانات",
    "root": "غير متوفر",
    "meaning": "مجال يركز على التصميم والبناء والصيانة للبنية التحتية والأنظمة اللازمة لدعم جمع كميات كبيرة من البيانات ومعالجتها وتخزينها وتحليلها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Engineering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أخلاقيات البيانات",
    "root": "غير متوفر",
    "meaning": "المبادئ والمعايير التي تحكم جمع البيانات ومعالجتها ومشاركتها واستخدامها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Ethics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات ثانوية",
    "root": "غير متوفر",
    "meaning": "أي معلومات تنتج بطريقة ثانوية من الأنشطة الرقمية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Exhaust.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استكشاف البيانات",
    "root": "غير متوفر",
    "meaning": "انظر \"تحليل البيانات الاستكشافي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Exploration.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نسيج البيانات",
    "root": "غير متوفر",
    "meaning": "معمارية لإدارة البيانات وتكاملها، توفر إمكانات متسقة عبر بيئات متعددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Fabric.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تغذية البيانات",
    "root": "غير متوفر",
    "meaning": "طريقة لتزويد المستخدمين ببيانات مُحَدَّثة من مصادر البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Feed.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصيُّد في البيانات",
    "root": "غير متوفر",
    "meaning": "انظر \"تلاعب بالبيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Fishing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دمج البيانات",
    "root": "غير متوفر",
    "meaning": "عملية دمج البيانات من مصادر مختلفة لتوفير معلومات أكثر اتساقًا ودقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Fusion.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوكمة البيانات",
    "root": "غير متوفر",
    "meaning": "السياسات والعمليات والهياكل التنظيمية التي تحدد حقوق اتخاذ القرار ومسؤوليات دعم إدارة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Governance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تنسيق البيانات",
    "root": "غير متوفر",
    "meaning": "عملية دمج البيانات المتباينة في صيغة متسقة لتسهيل الوصول إليها وتحليلها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Harmonization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مِحْوَر البيانات",
    "root": "غير متوفر",
    "meaning": "مستودع مركزي لجمع البيانات من مصادر متعددة وتخزينها وإدارتها ومشاركتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Hub.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظافة البيانات",
    "root": "غير متوفر",
    "meaning": "عملية الحفاظ على بيانات دقيقة كاملة متسقة داخل نظام أو قاعدة بيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Hygiene.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عينة بيانات",
    "root": "غير متوفر",
    "meaning": "تحديد عنصر بيانات من نوع بيانات أو مجموعة بيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Instance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تكامل البيانات",
    "root": "غير متوفر",
    "meaning": "عملية دمج لبيانات من مصادر مختلفة، في عرض موحد وواضح للمستخدمين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Integration.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صحة البيانات",
    "root": "غير متوفر",
    "meaning": "مقياس ثقة للتحقق من دقة البيانات واكتمالها واتساقها وامتثالها للوائح.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Integrity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء البيانات",
    "root": "غير متوفر",
    "meaning": "استخدام تقنيات الذكاء الاصطناعي لتحليل البيانات وتفسيرها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسمية البيانات",
    "root": "غير متوفر",
    "meaning": "انظر \"توصيف البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Labeling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بحيرة البيانات",
    "root": "غير متوفر",
    "meaning": "مستودع لتخزين كميات كبيرة من البيانات الأولية بصيغ مختلفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Lake.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مستودع بحيرة البيانات",
    "root": "غير متوفر",
    "meaning": "معمارية بيانات تجمع بين أفضل ميزات بحيرة البيانات ومستودع البيانات في منصة واحدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Lakehouse.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسرُّب البيانات",
    "root": "غير متوفر",
    "meaning": "حالة في تعلُّم الآلة تُستخدم فيها معلومات من خارج مجموعة بيانات التدريب لإنشاء النماذج؛ وهو ما يؤدي إلى تقديرات أداء غير دقيقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Leakage.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إلمام بالبيانات",
    "root": "غير متوفر",
    "meaning": "القدرة على فهم البيانات وتحليلها وتوصيلها بصورة فاعلة، واتخاذ قرارات مستنيرة تعتمد على رؤى مبنية على البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Literacy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحميل البيانات",
    "root": "غير متوفر",
    "meaning": "عملية استيراد أو نقل أو دمج البيانات من مصادر مختلفة في نظام تخزين واحد، مثل قاعدة بيانات أو مستودع بيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Loading.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سوق البيانات",
    "root": "غير متوفر",
    "meaning": "منصة إلكترونية عملُها الرئيس توفير البيانات أو أي خدمات ذات صلة، كما تسمح بشراء وبيع البيانات القابلة للقراءة آليًّا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Marketplace.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "متجر البيانات",
    "root": "غير متوفر",
    "meaning": "مجموعة فرعية من مستودع البيانات تركز على أنواع معينة من الأعمال أو الموضوعات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Mart.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إخفاء البيانات",
    "root": "غير متوفر",
    "meaning": "عملية تعتيم المعلومات الحساسة عن طريق استبدالها ببيانات وهمية ولكنها واقعية المظهر. يُطلق عليها أيضًا \"تشويش البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Masking.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ترحيل البيانات",
    "root": "غير متوفر",
    "meaning": "عملية نقل البيانات من نظام إلى آخر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Migration.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تنقيب في البيانات",
    "root": "غير متوفر",
    "meaning": "عملية اكتشاف الأنماط في كمية كبيرة من البيانات، واستخراج المعلومات المفيدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Mining.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج البيانات",
    "root": "غير متوفر",
    "meaning": "مجموعة من الطُّرُق المفاهيمية لوصف البيانات، ودلالاتها، والعلاقات بينها، وقيود الاتساق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نمذجة البيانات",
    "root": "غير متوفر",
    "meaning": "عملية إنشاء تمثيل مفاهيمي للبيانات وعلاقاتها؛ لأجل تخزينها في قاعدة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Modelling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تشويش البيانات",
    "root": "غير متوفر",
    "meaning": "انظر \"إخفاء البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Obfuscation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قابلية مراقبة البيانات",
    "root": "غير متوفر",
    "meaning": "القدرة على مراقبة صحة البيانات وفهمها والحفاظ عليها؛ لضمان دقتها واتساقها وموثوقيتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Observability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عمليات البيانات",
    "root": "غير متوفر",
    "meaning": "ممارسة لإدارة البيانات تستخدم منهجية رشيقة وتعاونية؛ لتبسيط دورة الحياة لتحليلات البيانات، وتحسين جودتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Operations (DataOps).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مالك البيانات",
    "root": "غير متوفر",
    "meaning": "شخص أو أكثر، مسؤول عن بيانات معينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Owner.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توازي البيانات",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم لتسريع التدريب أو الاستنتاج عن طريق تكرار النموذج على عدة أجهزة، ثم تقسيم البيانات المُدْخَلة على هذه الأجهزة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Parallelism.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سير عمل البيانات",
    "root": "غير متوفر",
    "meaning": "سلسلة من العمليات التي تنقل البيانات الخام وتحوِّلها من مصادر مختلفة إلى وجهة للتحليل أو الاستخدام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Pipeline.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نقطة بيانات",
    "root": "غير متوفر",
    "meaning": "جزء منفصل من المعلومات المشتقة من مجموعة بيانات أكبر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Point.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسميم البيانات",
    "root": "غير متوفر",
    "meaning": "هجوم أمني يقوم فيه المهاجم بإدخال بيانات خاطئة أو مضللة في مجموعة بيانات التدريب؛ لإفساد سلوك النموذج أو التأثير عليه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Poisoning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة البيانات",
    "root": "غير متوفر",
    "meaning": "مجموعة واسعة من العمليات التي يمكن إجراؤها على البيانات بوسائل يدوية أو مؤتمتة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Processing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استخلاص البيانات",
    "root": "غير متوفر",
    "meaning": "عملية فحص البيانات، وإعداد ملخصات وافية عنها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Profiling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات بديلة",
    "root": "غير متوفر",
    "meaning": "البيانات التي تحل محل البيانات المفقودة أو التي لا يمكن الوصول إليها أو قياسها، وذلك باستخدام بيانات ذات صلة من عمليات أو أنشطة مماثلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Proxy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "جودة البيانات",
    "root": "غير متوفر",
    "meaning": "مقياس لمدى فائدة البيانات وملاءمتها للغرض المقصود، ويشمل الاكتمال والاتساق والدقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Quality.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تنقيح البيانات",
    "root": "غير متوفر",
    "meaning": "عملية إزالة المعلومات الحساسة أو تعتيمها بشكل انتقائي من مستند أو مجموعة بيانات؛ لحمايتها من الوصول غير المصرَّح به.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Redaction.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تكرار البيانات",
    "root": "غير متوفر",
    "meaning": "تكرار البيانات على عدد من أجهزة الحاسب داخل نظام موزَّع؛ لضمان مستوى الاتساق في الوصول إلى المعلومات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Replication.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تمثيل البيانات",
    "root": "غير متوفر",
    "meaning": "الشكل الذي يمثل كيفية تخزين البيانات ومعالجتها ونقلها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Representation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أخذ عيِّنات البيانات",
    "root": "غير متوفر",
    "meaning": "عملية اختيار مجموعة فرعية من عيِّنات البيانات تُمثِّل مجموعة بيانات أكبر؛ لأجل تحليل الأنماط والاتجاهات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Sampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "علم البيانات",
    "root": "غير متوفر",
    "meaning": "مجال يركز على استخراج معلومات مفيدة ورؤى من البيانات عن طريق الاكتشاف أو اختبار الفرضيات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Science.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عالِم بيانات",
    "root": "غير متوفر",
    "meaning": "شخص متخصص في تحليلات البيانات، ولديه مهارات فنية لحل المشكلات المعقدة باستخدام أدوات علم البيانات وأساليبها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Scientist.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تنقية البيانات",
    "root": "غير متوفر",
    "meaning": "انظر \"تنظيف البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Scrubbing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوكمة أمن البيانات",
    "root": "غير متوفر",
    "meaning": "السياسات والإجراءات والضوابط التي تضمن حماية البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Security Governance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بذر البيانات",
    "root": "غير متوفر",
    "meaning": "عملية إدخال البيانات الأولية في قاعدة البيانات لتسهيل الاختبار أو التطوير.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Seeding.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تغيُّر البيانات",
    "root": "غير متوفر",
    "meaning": "انظر \"انحراف البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Shift.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تطفُّل على البيانات",
    "root": "غير متوفر",
    "meaning": "انظر \"تلاعب بالبيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Snooping.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مصدر البيانات",
    "root": "غير متوفر",
    "meaning": "المكان الذي تنشأ منه البيانات، ويمكن استرجاعها للتحليل أو المعالجة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Source.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مشرف البيانات",
    "root": "غير متوفر",
    "meaning": "دور وظيفي في إدارة البيانات يتضمن تنفيذ سياسات حوكمة البيانات والحفاظ عليها داخل المؤسسة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Steward.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سرد قصصي للبيانات",
    "root": "غير متوفر",
    "meaning": "ممارسة توصيل الرؤى المستمدة من البيانات عن طريق السرد والتصوير لجعل المعلومات المعقدة أكثر تأثيرًا وقابلية للفهم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Storytelling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هياكل البيانات",
    "root": "غير متوفر",
    "meaning": "طريقة لتنظيم البيانات وتخزينها في ذاكرة الحاسب للوصول إليها ومعالجتها بكفاءة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Structure.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صاحب البيانات الشخصية",
    "root": "غير متوفر",
    "meaning": "الفرد الذي تتعلق به البيانات الشخصية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Subject.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تباين البيانات",
    "root": "غير متوفر",
    "meaning": "التغيُّرات في مجموعات البيانات من جانب معدل الإرسال أو الصيغة أو الدلالات أو الجودة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Variability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تنوُّع البيانات",
    "root": "غير متوفر",
    "meaning": "اختلاف أنواع البيانات وصيَغها، مثل: البيانات المهيكلة وشبه المهيكلة وغير المهيكلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Variety.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سرعة البيانات",
    "root": "غير متوفر",
    "meaning": "معدل سرعة إنشاء البيانات أو إرسالها أو تخزينها أو تحليلها أو تصويرها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Velocity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "موثوقية البيانات",
    "root": "غير متوفر",
    "meaning": "دقة البيانات واكتمالها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Veracity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصوير البيانات",
    "root": "غير متوفر",
    "meaning": "تمثيل رسومي للمعلومات يسلط الضوء على الأنماط والاتجاهات في البيانات، ويساعد القارئ على اكتساب رؤى سريعة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Visualization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقلُّب البيانات",
    "root": "غير متوفر",
    "meaning": "خصائص البيانات المتعلقة بمعدل تغيرها بمرور الوقت.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Volatility.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حجم البيانات",
    "root": "غير متوفر",
    "meaning": "كمية البيانات التي تؤثِّر في موارد المعالجة والتخزين وفي إدارتها أيضًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Volume.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مستودع البيانات",
    "root": "غير متوفر",
    "meaning": "مستودع مركزي لبيانات جُمعت من مصادر متعددة؛ لدعم تحليل البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Warehouse.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجهيز البيانات",
    "root": "غير متوفر",
    "meaning": "عملية لتنظيف البيانات وتحويلها وتنظيمها إلى صيغة قابلة للاستخدام في التحليل أو النمذجة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data Wrangling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي مرتكز على البيانات",
    "root": "غير متوفر",
    "meaning": "طريقة تركز على التحسين المنهجي لبيانات التدريب؛ لتعزيز أداء نماذج الذكاء الاصطناعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data-Centric Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اتخاذ قرار مبني على البيانات",
    "root": "غير متوفر",
    "meaning": "عملية اتخاذ القرارات بناءً على البيانات بدلًا من مجرد الحدس أو الملاحظة. ويُطلق عليها أيضًا \"اتخاذ قرار مستند إلى البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data-Driven Decision-Making (DDDM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اتخاذ قرار مستند إلى البيانات",
    "root": "غير متوفر",
    "meaning": "انظر \"اتخاذ قرار مبني على البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Data-Informed Decision-Making (DIDM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة البيانات",
    "root": "غير متوفر",
    "meaning": "مجموعة من البيانات المنظَّمة وفقًا لهيكل مفاهيمي بغرض دعم التطبيقات في مجال معين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Database.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مدير قاعدة البيانات",
    "root": "غير متوفر",
    "meaning": "شخص يُدير قواعد البيانات وأنظمتها، وهو مسؤول عن صيانتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Database Administrator (DBA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة البيانات كخدمة",
    "root": "غير متوفر",
    "meaning": "منصة تتيح استخدام وظائف قواعد البيانات على السحابة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Database as a Service (DBaaS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسوية قاعدة البيانات",
    "root": "غير متوفر",
    "meaning": "عملية تصميم البيانات في قاعدة بيانات عن طريق إنشاء علاقات بين الجداول؛ لإزالة التكرار والتبعية غير المتسقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Database Normalization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استعلام قاعدة البيانات",
    "root": "غير متوفر",
    "meaning": "طلب استرجاع البيانات المخزَّنة في قاعدة البيانات أو معالجتها أو إدارتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Database Query.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مخطط قاعدة البيانات",
    "root": "غير متوفر",
    "meaning": "التصميم العام لقاعدة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Database Schema.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إطار البيانات",
    "root": "غير متوفر",
    "meaning": "نوع بيانات يُستخدم لتمثيل مجموعات البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dataframe.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "داتا لوج",
    "root": "غير متوفر",
    "meaning": "لغة برمجة منطقية تصريحية تتضمن مجموعة محدودة من الحقائق والقواعد، ويمكن استخدامها في قواعد البيانات الاستنباطية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Datalog.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مجموعة البيانات",
    "root": "غير متوفر",
    "meaning": "مجموعة من البيانات التي يمكن الوصول إليها بصيغة واحدة أو أكثر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dataset (or Data Set).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نوع البيانات",
    "root": "غير متوفر",
    "meaning": "مجموعة محددة من البيانات التي لها هياكل محددة ومجموعة من العمليات المُتاحة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Datatype (or Data Type).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي لا مركزي",
    "root": "غير متوفر",
    "meaning": "انظر \"ذكاء اصطناعي موزَّع\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Decentralized Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل القرار",
    "root": "غير متوفر",
    "meaning": "طريقة معيارية لاتخاذ الخيارات المثلى في ظل ظروف غير مؤكدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Decision Analysis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حدود القرار",
    "root": "غير متوفر",
    "meaning": "الفاصل بين الأصناف التي تعلمها النموذج في مشكلات التصنيف الثنائي أو المتعدد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Decision Boundary.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام دعم القرار",
    "root": "غير متوفر",
    "meaning": "نظام معلومات يساعد في تقييم البدائل وحل المشكلات واتخاذ القرارات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Decision Support System (DSS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية القرار",
    "root": "غير متوفر",
    "meaning": "دراسة الاستدلال الكامن وراء الاختيارات والقرارات في ظل عدم التيقن.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Decision Theory.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حد القرار",
    "root": "غير متوفر",
    "meaning": "انظر \"حد التصنيف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Decision Threshold.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شجرة القرار",
    "root": "غير متوفر",
    "meaning": "خوارزمية تعلُّم موجَّه تستخدم رسومًا بيانية شجرية؛ لإجراء عمليات تحليل القرار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Decision Tree.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم شجرة القرار",
    "root": "غير متوفر",
    "meaning": "عملية بناء شجرة قرار من البيانات لأداء مهام التصنيف أو الانحدار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Decision Tree Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مفكِّك ترميز",
    "root": "غير متوفر",
    "meaning": "نظام تعلُّم آلة يُحوِّل التمثيل المعالَج إلى تمثيل خام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Decoder.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تفكيك الترشيح",
    "root": "غير متوفر",
    "meaning": "انظر \"ترشيح معكوس\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deconvolution.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية ترشيحية عكسية",
    "root": "غير متوفر",
    "meaning": "شبكة عصبية تعمل بطريقة معاكسة لطريقة عمل الشبكة العصبية الترشيحية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deconvolutional Neural Network (DNN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات استنباطية",
    "root": "غير متوفر",
    "meaning": "نوع من تحليلات البيانات، يبدأ بنظرية عامة أو فرضية، ثم يختبرها ببيانات محددة للوصول إلى نتيجة ما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deductive Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُصنِّف استنباطي",
    "root": "غير متوفر",
    "meaning": "نوع تَكَيُّفيّ من مُحَرِّكات الاستنتاج يُستخدم لتحسين دقة التصنيف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deductive Classifier.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استدلال استنباطي",
    "root": "غير متوفر",
    "meaning": "عملية استخلاص الاستنتاجات بناءً على بيانات أو حقائق عامة مقبولة على أنها صحيحة. ويُطلق عليها أيضًا \"استنباط\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deductive Reasoning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة الاعتقاد العميق",
    "root": "غير متوفر",
    "meaning": "نوع من الشبكات العصبية العميقة التي تتكون من طبقات متعددة من المتغيرات العشوائية الكامنة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deep Belief Network.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ديب بلو",
    "root": "غير متوفر",
    "meaning": "حاسب عملاق فاز على بطل العالم في لعبة الشطرنج \"جاري كاسباروف\" عام 1997م.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deep Blue.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم عميق",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من تعلُّم الآلة يستخدم عدة طبقات مخفية في الشبكات العصبية لحل المشكلات المعقدة عن طريق تحديد أهم الخصائص الأساسية للبيانات المُدْخَلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deep Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج عميق",
    "root": "غير متوفر",
    "meaning": "انظر \"شبكة عصبية عميقة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deep Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية عميقة",
    "root": "غير متوفر",
    "meaning": "نوع من الشبكات العصبية الاصطناعية يشتمل على عدة طبقات بين طبقتي المُدْخَلات والمخرجات. ويُطلق عليه أيضًا \"نموذج عميق\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deep Neural Network (DNN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة كيو العميقة",
    "root": "غير متوفر",
    "meaning": "خوارزمية تجمع بين التعلُّم التعزيزي والشبكات العصبية العميقة لحل المشكلات المعقدة، والتعامل مع البيئات الكثيرة الأبعاد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deep Q-Network (DQN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تزييف عميق",
    "root": "غير متوفر",
    "meaning": "نوع من الوسائط المصطنعة التي توضع فيها صورة شخص أو صوته بدلًا من صورة شخص آخر أو صوته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deepfake.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات ديموغرافية",
    "root": "غير متوفر",
    "meaning": "بيانات اجتماعية واقتصادية حول السكان، مثل: الجنس والعمر والتعليم والدخل والعمل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Demographic Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تكافؤ ديموغرافي",
    "root": "غير متوفر",
    "meaning": "مقياس للإنصاف يكون استيفاؤه عندما لا تعتمد نتائج تصنيف النموذج على سمة حساسة معينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Demographic Parity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إزالة التشويش",
    "root": "غير متوفر",
    "meaning": "طريقة لإضافة تشويش مصطنع إلى مجموعة البيانات، ثم يحاول النموذج إزالتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Denoising.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خاصية كثيفة",
    "root": "غير متوفر",
    "meaning": "خاصية معظم قيمها ليست صفرية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dense Feature.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طبقة كثيفة",
    "root": "غير متوفر",
    "meaning": "انظر \"طبقة متصلة كليًّا\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dense Layer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عُمق",
    "root": "غير متوفر",
    "meaning": "عدد الطبقات التي تتعلَّم الأوزان في شبكة عصبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Depth.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية ترشيحية قابلة للفصل عمقًا",
    "root": "غير متوفر",
    "meaning": "معمارية شبكة عصبية ترشيحية يحل فيها الترشيح القابل للفصل عمقًا محل وحدات إنسيبشن.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Depthwise Separable Convolutional Neural Network (sepCNN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات وصفية",
    "root": "غير متوفر",
    "meaning": "نوع من تحليلات البيانات، يفحص البيانات التاريخية لفهم ما حدث في الماضي وتلخيصه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Descriptive Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية حتمية النتائج",
    "root": "غير متوفر",
    "meaning": "خوارزمية تنتج نفس المخرجات دائمًا لمُدْخَل معين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Deterministic Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات تشخيصية",
    "root": "غير متوفر",
    "meaning": "نوع من تحليلات البيانات، يتعمق في البيانات لتحديد سبب حدوث شيء ما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Diagnostic Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إدارة الحوار",
    "root": "غير متوفر",
    "meaning": "عملية اختيار الخطوة التالية الأنسب في حوار ما لتحقيق الهدف المنشود.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dialog Management.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام حوار",
    "root": "غير متوفر",
    "meaning": "نظام حاسب يمكنه التحدث مع الإنسان بلغة طبيعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dialogue System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خصوصية تباينية",
    "root": "غير متوفر",
    "meaning": "تعريف رياضي للخصوصية في تعلُّم الآلة يُتيح جمع الإحصاءات حول مجموعة البيانات وتحليلها ومشاركتها بناءً على البيانات الشخصية مع حماية خصوصية الأفراد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Differential Privacy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج انتشاري",
    "root": "غير متوفر",
    "meaning": "نموذج توليدي يتعلم كيفية إنشاء بيانات جديدة، عن طريق عكس عملية إضافة التشويش إلى بيانات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Diffusion Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة الصور الرقمية",
    "root": "غير متوفر",
    "meaning": "انظر \"معالجة الصور\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Digital Image Processing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة الإشارات الرقمية",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من معالجة الإشارات يركز على استخدام أجهزة الحاسب لتحليل الإشارات الرقمية ومعالجتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Digital Signal Processing (DSP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقليص الأبعاد",
    "root": "غير متوفر",
    "meaning": "طريقة لتقليل عدد المتغيرات في مُتَّجه الخصائص؛ لأجل تبسيط النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dimension Reduction (or Dimensionality Reduction).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحسين التفضيل المباشر",
    "root": "غير متوفر",
    "meaning": "أسلوب لتدريب النماذج على مواءمة سلوكها مع التفضيلات البشرية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Direct Preference Optimization (DPO).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر مباشرة",
    "root": "غير متوفر",
    "meaning": "أسلوب لهندسة الأوامر يُعطى فيه النموذج تعليمات أو سؤالًا بسيطًا دون أي أمثلة إضافية. ويُطلق عليه أيضًا \"أوامر بدون أمثلة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Direct Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر تحفيزية موجَّهة",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر يُضمِّن إشارات محددة لتوجيه استجابات النموذج نحو النتيجة المطلوبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Directional Stimulus Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خاصية متقطعة",
    "root": "غير متوفر",
    "meaning": "خاصية لها عدد محدود من القيم الممكنة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Discrete Feature.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج تمييزي",
    "root": "غير متوفر",
    "meaning": "نموذج يُستخدم في التصنيف والانحدار للتنبؤ بالأسماء، عن طريق تحديد الاحتمال الشرطي للمخرجات بالنظر إلى الخصائص والأوزان. ويُطلق عليه أيضًا \"نموذج شرطي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Discriminative Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُميِّز",
    "root": "غير متوفر",
    "meaning": "جزء من شبكة توليدية تنافسية يفحص ما إذا كان المثال الذي أنشأه المُولِّد حقيقيًّا أم مزيفًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Discriminator.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تأثير متباين",
    "root": "غير متوفر",
    "meaning": "حالة تُفيد فيها العملية الخوارزمية لاتخاذ القرار، أو تضر مجموعات فرعية معينة أكثر من غيرها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Disparate Impact.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة متباينة",
    "root": "غير متوفر",
    "meaning": "حالة تُحلَل فيها السمات الحساسة للأشخاص في العملية الخوارزمية لاتخاذ القرار بطريقة لا تُعامل فيها المجموعات الفرعية المختلفة على حد سواء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Disparate Treatment.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي موزَّع",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من الذكاء الاصطناعي يركز على حل المشكلات باستخدام عمليات منسقة ومتزامنة. ويُطلق عليه أيضًا \"ذكاء اصطناعي لا مركزي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Distributed Artificial Intelligence (DAI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة موزَّعة",
    "root": "غير متوفر",
    "meaning": "نظام موزَّع يتضمن عدة مُكوِّنات برمجية تعمل كنظام واحد في عدة أجهزة حاسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Distributed Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة البيانات الموزَّعة",
    "root": "غير متوفر",
    "meaning": "شكل من أشكال معالجة البيانات تُوزَّع فيه العمليات بين شبكة من أجهزة الحاسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Distributed Data Processing (DDP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام الملفات الموزَّع",
    "root": "غير متوفر",
    "meaning": "نظام إدارة ملفات يُتيح تخزين الملفات عبر مجموعة من الأجهزة، مع إعطاء طريقة عرض موحدة للعملاء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Distributed File System (DFS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "متانة التوزيع",
    "root": "غير متوفر",
    "meaning": "إطار في تعلُّم الآلة لجعل النماذج أقل حساسية للاختلافات أو التغيرات في توزيع البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Distributional Robustness.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع انقسامي",
    "root": "غير متوفر",
    "meaning": "نوع من التجميع الهرمي تُجمَّع فيه جميع الأمثلة أولًا في مجموعة، ثم تُقسَّم المجموعة بصورة تكرارية إلى شجرة هرمية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Divisive Clustering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تكييف المجال",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من مجالات تعلُّم الآلة يهدف إلى تطبيق خوارزمية سبق تدريبها في مجال معين على مجال آخر له ارتباط بالمجال الأول.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Domain Adaptation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تغيُّر المجال",
    "root": "غير متوفر",
    "meaning": "تغيير في توزيع البيانات بين المجال المصدر (مثل بيانات التدريب) والمجال الهدف (مثل بيانات الاختبار).",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Domain Shift.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقليل العيِّنات",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم لموازنة البيانات غير المتوازنة الأصناف، عن طريق حذف أمثلة من صنف الأغلبية. ويُطلق عليه أيضًا \"خفض العيِّنات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Downsampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مساعدة السائق",
    "root": "غير متوفر",
    "meaning": "نظام مصمَّم لدعم السائق في مهام القيادة وتعزيز السلامة والراحة. ويُطلق عليه أيضًا \"أنظمة مساعدة السائق المتقدمة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Driver Assistance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سيارة بدون سائق",
    "root": "غير متوفر",
    "meaning": "انظر \"سيارة ذاتية القيادة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Driverless Car.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط الإسقاط",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم في تدريب الشبكات العصبية لمنع فرط التخصيص، عن طريق إلغاء تنشيط مجموعة فرعية من الخلايا العصبية بشكل عشوائي أثناء تكرار التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dropout Regularization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج ديناميكي",
    "root": "غير متوفر",
    "meaning": "نموذج يُدرَّب تدريبًا متواصلًا باستخدام بيانات تدخل باستمرار في النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Dynamic Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم شغوف",
    "root": "غير متوفر",
    "meaning": "طريقة تعلُّم تعالج بيانات التدريب قبل تلقي أي استعلام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Eager Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توقف مبكر",
    "root": "غير متوفر",
    "meaning": "طريقة ضبط تتضمن إيقاف تدريب النموذج قبل الانتهاء من تقليل خسارة التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Early Stopping.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مسافة نقل التوزيع",
    "root": "غير متوفر",
    "meaning": "مقياس للتشابه بين توزيعين احتماليين. ويُطلق عليه أيضًا \"مسافة واسرستين\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Earth Mover's Distance (EMD).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة حالة الصدى",
    "root": "غير متوفر",
    "meaning": "نوع من حوسبة المكامن ينشئ شبكة تكرارية متصلة عشوائيًّا ويدرب أوزان اتصال مناسبة لإنتاج المخرجات المرغوبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Echo State Network (ESN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات طرفية",
    "root": "غير متوفر",
    "meaning": "عملية جمع البيانات وتحليلها قريبًا من الأجهزة الطرفية، مثل: أجهزة الاستشعار وأجهزة إنترنت الأشياء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Edge Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي طرفي",
    "root": "غير متوفر",
    "meaning": "استخدام الذكاء الاصطناعي في الأجهزة الطرفية، مثل: أجهزة الاستشعار وأجهزة إنترنت الأشياء، لمعالجة البيانات واتخاذ القرارات في الوقت الآني.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Edge Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حالة نادرة",
    "root": "غير متوفر",
    "meaning": "حالة نادرة أو غير عادية تقع خارج النطاق الطبيعي للبيانات أو سلوك النظام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Edge Case.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة طرفية",
    "root": "غير متوفر",
    "meaning": "طريقة حوسبية تُنفَّذ فيها عمليات الحوسبة في طرف الشبكة، مثل: أجهزة استشعار إنترنت الأشياء أو الأجهزة المحلية، بدلًا من مراكز البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Edge Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج طرفي",
    "root": "غير متوفر",
    "meaning": "نموذج يعمل على الأجهزة الطرفية، مثل أجهزة الاستشعار وأجهزة إنترنت الأشياء، ويتيح معالجة البيانات محليًّا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Edge Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تأثير أليزا",
    "root": "غير متوفر",
    "meaning": "ميل الناس إلى نسب صفات شبيهة بصفات البشر، مثل: الذكاء والفهم والعواطف، إلى أنظمة الذكاء الاصطناعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Eliza Effect.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي مضمَّن",
    "root": "غير متوفر",
    "meaning": "دمج قدرات الذكاء الاصطناعي في الأجهزة أو الأنظمة ذات الموارد الحوسبية المحدودة، مثل أجهزة الاستشعار أو وحدات التحكم الدقيقة أو أجهزة إنترنت الأشياء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Embedded Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تضمين",
    "root": "غير متوفر",
    "meaning": "عملية تحويل مُتَّجه كثير الأبعاد إلى فضاء قليل الأبعاد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Embedding.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فضاء التضمين",
    "root": "غير متوفر",
    "meaning": "فضاء مُتَّجه قليل الأبعاد نسبيًّا تُعيّن عليه خصائص من فضاء مُتَّجه ذي أبعاد أكثر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Embedding Space.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وكيل مُجسَّد",
    "root": "غير متوفر",
    "meaning": "وكيل يتفاعل مع بيئة عبر جسم مادي أو افتراضي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Embodied Agent.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي مُجسَّد",
    "root": "غير متوفر",
    "meaning": "مجال يركز على دمج قدرات الذكاء الاصطناعي في الروبوتات وتمكينها من التعلُّم عن طريق التفاعل مع البيئة المحيطة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Embodied Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "علوم إدراكية مُجسَّدة",
    "root": "غير متوفر",
    "meaning": "مجال يهدف إلى دراسة آليات تطوير العمليات الإدراكية، وتأكيد دور التفاعل مع البيئة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Embodied Cognitive Science.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي عاطفي",
    "root": "غير متوفر",
    "meaning": "انظر \"حوسبة عاطفية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Emotion Artificial Intelligence (or Emotional Artificial Intelligence).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعرُّف على المشاعر",
    "root": "غير متوفر",
    "meaning": "عملية التعرُّف على المشاعر المضمَّنة في نص أو كلام أو صورة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Emotion Recognition.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام التعرُّف على المشاعر",
    "root": "غير متوفر",
    "meaning": "تقنية تستخدم الذكاء الاصطناعي لتحديد المشاعر البشرية وتفسيرها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Emotion Recognition System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقليل المخاطر التجريبي",
    "root": "غير متوفر",
    "meaning": "عملية اختيار نموذج يقلل من الخسارة المتوسطة لمجموعة معينة من بيانات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Empirical Risk Minimization (ERM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُرمِّز",
    "root": "غير متوفر",
    "meaning": "نظام تعلُّم آلة يُحوِّل التمثيل الخام إلى تمثيل معالَج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Encoder.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع النماذج",
    "root": "غير متوفر",
    "meaning": "طريقة للجمع بين تنبؤات نماذج متعددة للحصول على أداء تنبؤي أفضل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ensemble.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "متوسط التجميع",
    "root": "غير متوفر",
    "meaning": "أسلوب مستخدم في الشبكات العصبية الاصطناعية لإنتاج نموذج متوسط من مجموعة من النماذج المتواضعة الدقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ensemble Averaging.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "كيان",
    "root": "غير متوفر",
    "meaning": "شيء مادي أو غير مادي يمكن التعرُّف عليه وتمييزه بوضوح.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Entity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توصيف الكيانات",
    "root": "غير متوفر",
    "meaning": "عملية تحديد الكيانات واستخراجها ووسمها في النص لمساعدة الآلة على فهم الجمل غير المهيكلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Entity Annotation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيئة",
    "root": "غير متوفر",
    "meaning": "عالم في التعلُّم التعزيزي يشتمل على الوكيل ويسمح له برصد حالة ذلك العالم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Environment.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حالة البيئة",
    "root": "غير متوفر",
    "meaning": "قيم المُعامِلات في التعلُّم التعزيزي التي تصف التكوين الحالي للبيئة الذي يستخدمه الوكيل لاختيار فعل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Environment State.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دورة",
    "root": "غير متوفر",
    "meaning": "عملية تدريب كاملة على مجموعة البيانات بأكملها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Epoch.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سياسة إبسيلون الجشعة",
    "root": "غير متوفر",
    "meaning": "سياسة في التعلُّم التعزيزي تتبع سياسة عشوائية مع احتمال إبسيلون أو سياسة الجشع.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Epsilon Greedy Policy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تكافؤ الفرص",
    "root": "غير متوفر",
    "meaning": "مقياس إنصاف لفحص ما إذا كان المُصنِّف يتنبأ باسم مفضل بطريقة متساوية لجميع قيم السمة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Equality of Opportunity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "احتمالات متكافئة",
    "root": "غير متوفر",
    "meaning": "مقياس إنصاف لفحص ما إذا كان المُصنِّف يتنبأ باسم ما بطريقة متساوية لجميع قيم السمة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Equalized Odds.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انتشار الأخطاء",
    "root": "غير متوفر",
    "meaning": "ظاهرة تحدث فيها أخطاء في البيانات أو المُعامِلات أو الحسابات الوسيطة، ويمكن أن تؤثِّر في المخرجات النهائية للنموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Error Propagation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم مبني على الخطأ",
    "root": "غير متوفر",
    "meaning": "نوع من التعلُّم يستخدم فيه الوكيل معلومات حول الاختلاف بين السلوك الحالي والمستهدف لتعديل سلوكه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Error-Driven Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُقدِّر",
    "root": "غير متوفر",
    "meaning": "معادلة في تعلُّم الآلة تُستخدم لاختيار أفضل نموذج بيانات بناءً على المشاهدات الحقيقية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Estimator.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات التقييم",
    "root": "غير متوفر",
    "meaning": "انظر \"بيانات الاختبار\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Evaluation Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة تدفق الأحداث",
    "root": "غير متوفر",
    "meaning": "عملية التحليل السريع الآني لتدفقات البيانات المستمرة للأحداث.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Event Stream Processing (ESP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية تطورية",
    "root": "غير متوفر",
    "meaning": "خوارزمية مستوحاة من التطور البيولوجي لحل مشكلات التحسين والبحث.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Evolutionary Algorithm (EA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة تطورية",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من الذكاء الاصطناعي يستخدم آليات مستوحاة من التطور البيولوجي لحل مشكلات التحسين والبحث.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Evolutionary Computation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مثال",
    "root": "غير متوفر",
    "meaning": "مثال من مجموعة البيانات يتكون من خاصية واحدة أو أكثر وقد يحوي اسمًا أيضًا. ويُطلق عليه أيضًا \"حالة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Example.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إعادة تشغيل التجربة",
    "root": "غير متوفر",
    "meaning": "مخزن مؤقت للذاكرة في التعلُّم التعزيزي لتخزين انتقالات الحالة المكتسبة أثناء عملية التعلُّم واستخدامها لاحقًا لتدريب النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Experience Replay.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز المُختبِر",
    "root": "غير متوفر",
    "meaning": "نوع من التحيُّز التأكيدي الذي يواصل فيه المختبر تدريب النموذج إلى أن تُؤكَّد الفرضية المطروحة سابقًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Experimenter's Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام خبير",
    "root": "غير متوفر",
    "meaning": "نظام حاسب يحاكي قدرة الخبير البشري على اتخاذ القرارات في مجال معين بناءً على قاعدة معرفة تتضمن حقائق وقواعد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Expert System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قابلية التفسير",
    "root": "غير متوفر",
    "meaning": "القدرة على شرح العوامل المهمة التي تؤثِّر في نتائج نظام الذكاء الاصطناعي بعبارات مفهومة للإنسان. ويُطلق عليها أيضًا \"ذكاء اصطناعي قابل للتفسير\" أو \"قابلية الشرح\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Explainability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي قابل للتفسير",
    "root": "غير متوفر",
    "meaning": "انظر \"قابلية التفسير\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Explainable Artificial Intelligence (XAI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مشكلة انفجار التدرج",
    "root": "غير متوفر",
    "meaning": "مشكلة تحدث في تدريب الشبكات العصبية عندما تتراكم تدرجات خطأ كبير، وهو ما يؤدي إلى نموذج غير مستقر بسبب التحديثات الكبيرة جدًّا للأوزان.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Exploding Gradient Problem.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل البيانات الاستكشافي",
    "root": "غير متوفر",
    "meaning": "المرحلة الأولية في تحليل البيانات لدراسة مجموعة البيانات وتلخيص خصائصها الرئيسة. يُطلق عليها أيضًا \"استكشاف البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Exploratory Data Analysis (EDA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توزيع أُسِّي",
    "root": "غير متوفر",
    "meaning": "توزيع احتمالي يقيس الوقت بين الأحداث.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Exponential Distribution.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "واقع ممتد",
    "root": "غير متوفر",
    "meaning": "دمج الذكاء الاصطناعي مع تقنية الواقع الافتراضي والمُعَزَّز والمختلط لإضافة إمكانات متقدمة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Extended Reality.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات خارجية",
    "root": "غير متوفر",
    "meaning": "البيانات المخزنة في مصادر خارجية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: External Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استخراج وتحويل وتحميل",
    "root": "غير متوفر",
    "meaning": "عملية جمع البيانات من مصادر مختلفة وتحويلها إلى صيغة مناسبة وتخزينها في مستودع مركزي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Extract, Transform and Load (ETL).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقدير استقرائي",
    "root": "غير متوفر",
    "meaning": "عملية التنبؤ بقيمة المتغيرات خارج نطاق المشاهدات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Extrapolation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مقياس إف (أو مقياس إف 1)",
    "root": "غير متوفر",
    "meaning": "مقياس لدقة النموذج في التصنيف الثنائي عن طريق حساب المتوسط التوافقي للإحكام والاستدعاء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: F-Score (or F1-Score).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تَعرُّف على الوجوه",
    "root": "غير متوفر",
    "meaning": "نظام حاسب قادر على التعرُّف على شخص ما عن طريق صورة أو فيديو.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Face Recognition (or Facial Recognition).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قيد الإنصاف",
    "root": "غير متوفر",
    "meaning": "شرط أو مجموعة من الشروط لضمان أن لا تُنتِج خوارزميات تعلم الآلة نتائج متحيزة أو تمييزية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fairness Constraint.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مقياس الإنصاف",
    "root": "غير متوفر",
    "meaning": "تعريف للإنصاف قابل للقياس.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fairness Metric.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سقوط",
    "root": "غير متوفر",
    "meaning": "انظر \"المعدل الإيجابي الخاطئ\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fall-Out.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف سلبي خاطئ",
    "root": "غير متوفر",
    "meaning": "نتيجة تنبأ النموذج بأنها سلبية، في حين هي في الواقع إيجابية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: False Negative (FN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معدل سلبي خاطئ",
    "root": "غير متوفر",
    "meaning": "نسبة الأمثلة الإيجابية الفعلية التي يُتنبأ بأنها سلبية. ويُطلق عليها أيضًا \"معدل الخطأ\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: False Negative Rate (FNR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف إيجابي خاطئ",
    "root": "غير متوفر",
    "meaning": "نتيجة تنبأ النموذج بأنها إيجابية، في حين هي في الواقع سلبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: False Positive (FP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معدل إيجابي خاطئ",
    "root": "غير متوفر",
    "meaning": "نسبة الأمثلة السلبية الفعلية التي يُتنبأ بأنها إيجابية. ويُطلق عليها أيضًا \"سقوط\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: False Positive Rate (FPR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شجرة سريعة ومقتصدة",
    "root": "غير متوفر",
    "meaning": "شجرة قرار بسيطة تُستخدم لمشكلات التصنيف ذات المعلومات المحدودة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fast-and-Frugal Tree (FFT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحمُّل الخطأ",
    "root": "غير متوفر",
    "meaning": "قدرة النظام على الاستمرار في أداء الوظيفة المطلوبة حتى مع وجود أخطاء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fault Tolerance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خاصية",
    "root": "غير متوفر",
    "meaning": "صفة أو ميزة للبيانات يمكن استخدامها مُدخَلًا لعملية التنبؤ، وغالبًا ما تُستخدم مُرادِفًا لكلمة \"سمة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خاصية مُركَّبة",
    "root": "غير متوفر",
    "meaning": "خاصية مصطنعة تُنشأ عن طريق ضرب خاصيتين أو أكثر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Cross.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "كاشف الخصائص",
    "root": "غير متوفر",
    "meaning": "انظر \"مُرشِّح\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Detector.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هندسة الخصائص",
    "root": "غير متوفر",
    "meaning": "عملية اختيار وإنشاء خصائص مفيدة من البيانات الأولية لتدريب نموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Engineering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استخراج الخصائص",
    "root": "غير متوفر",
    "meaning": "عملية توليد أو اشتقاق متغيرات مفيدة وغير متكررة من البيانات الأولية لوصف خصائص الأشياء أو الكيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Extraction.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تهشير الخصائص",
    "root": "غير متوفر",
    "meaning": "أسلوب لتحويل البيانات الفئوية الكثيرة الأبعاد إلى متجه عددي ثابت الحجم. ويُطلق عليه أيضًا \"حيلة التهشير\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Hashing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم الخصائص",
    "root": "غير متوفر",
    "meaning": "مجموعة من الأساليب للعثور تلقائيًّا على التمثيلات المطلوبة لاكتشاف الخصائص أو تصنيفها من البيانات الأولية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خريطة الخصائص",
    "root": "غير متوفر",
    "meaning": "ناتج لتطبيق عملية الترشيح على البيانات المُدْخَلة باستخدام مُرشِّح. ويُطلق عليه أيضًا \"خريطة التنشيط\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Map.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسوية الخصائص",
    "root": "غير متوفر",
    "meaning": "طريقة لتغيير نطاق قيم خاصية إلى نطاق قياسي من القيم، عادةً من -1 إلى +1 أو من 0 إلى 1.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Normalization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مواءمة الخصائص",
    "root": "غير متوفر",
    "meaning": "طريقة لتغيير نطاق قيم خاصية لمطابقة نطاق الخصائص الأخرى في مجموعة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Scaling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انتقاء الخصائص",
    "root": "غير متوفر",
    "meaning": "عملية لتقليل الأبعاد التي تعمل بها النماذج عن طريق استبعاد الخصائص غير المهمة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Selection.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مجموعة الخصائص",
    "root": "غير متوفر",
    "meaning": "مجموعة من الخصائص التي يتدرب عليها نموذج تعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Set.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تغيُّر الخاصية",
    "root": "غير متوفر",
    "meaning": "تغيير في توزيع الخصائص، وقد يؤثر على أداء النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Shift.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فضاء الخصائص",
    "root": "غير متوفر",
    "meaning": "مجموعة من الخصائص ذات الصلة بميزات معينة لشيء، أو حدث قيد الدراسة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Space.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مخزن الخصائص",
    "root": "غير متوفر",
    "meaning": "مستودع مركزي لتخزين الخصائص وإدارتها ومشاركتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Store.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُتَّجه الخصائص",
    "root": "غير متوفر",
    "meaning": "مجموعة من قيم الخصائص التي تُمثِّل عينة تُمَرر إلى نموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feature Vector.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم مُتَّحِد",
    "root": "غير متوفر",
    "meaning": "طريقة من طُرُق تعلُّم الآلة الموزَّع تُدرِّب النموذج في أجهزة متعددة ببيانات محلية للمحافظة على خصوصية البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Federated Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حلقة تغذية راجعة",
    "root": "غير متوفر",
    "meaning": "حالة في تعلُّم الآلة تؤثِّر فيها تنبؤات النموذج على بيانات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feedback Loop.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية ذات تغذية أمامية",
    "root": "غير متوفر",
    "meaning": "شبكة عصبية اصطناعية تنتقل فيها المعلومات دائمًا في اتجاه واحد، من طبقة المُدْخَلات إلى طبقة المخرجات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Feedforward Neural Network.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم بأمثلة قليلة",
    "root": "غير متوفر",
    "meaning": "طريقة لتعلُّم مصنِّفات فاعلة من عدد قليل من أمثلة التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Few-Shot Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر بأمثلة قليلة",
    "root": "غير متوفر",
    "meaning": "أسلوب لهندسة الأوامر يُعطى فيه النموذج تعليمات وبعض الأمثلة لتوجيه استجاباته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Few-Shot Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط دقيق",
    "root": "غير متوفر",
    "meaning": "عملية تعديل مُعامِلات نموذج مُدرَّب لتلبية متطلبات مشكلة جديدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fine Tuning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بوت محادثة موجَّه",
    "root": "غير متوفر",
    "meaning": "بوت محادثة قائم على قواعد، ويشتمل على تسلسل من محادثات مُعَدَّة سابقًا. ويُطلق عليه أيضًا \"بوت محادثة قائم على قواعد\"، أو \"بوت محادثة قائم على كلمات مفتاحية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Flow-Based Chatbot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة محورية",
    "root": "غير متوفر",
    "meaning": "دالة خسارة مصممة لمعالجة مشكلة عدم توازن الأصناف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Focal Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بوابة النسيان",
    "root": "غير متوفر",
    "meaning": "جزء من خلية الذاكرة قصيرة المدى المُطَوَّلة التي تنظم تدفق المعلومات عبر الخلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Forget Gate.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لغة رسمية",
    "root": "غير متوفر",
    "meaning": "مجموعة من الكلمات المختارة أحرفها من الأبجدية وفقًا لمجموعة من القواعد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Formal Language.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسلسل أمامي",
    "root": "غير متوفر",
    "meaning": "طريقة استدلال تبدأ بمجموعة من الحقائق المعروفة، وتطبق قواعد الاستنتاج لاستخلاص حقائق جديدة للوصول إلى هدف أو استنتاج محدد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Forward Chaining.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انتشار أمامي",
    "root": "غير متوفر",
    "meaning": "عملية حساب المتغيرات الوسيطة وتخزينها في شبكة عصبية من طبقة المُدْخَلات إلى طبقة المخرجات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Forward Propagation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ترشيح متوسع جزئيًّا",
    "root": "غير متوفر",
    "meaning": "انظر \"ترشيح معكوس\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fractionally Strided Convolution.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إطار",
    "root": "غير متوفر",
    "meaning": "هيكل بيانات يُمثِّل الحالات النمطية لتقسيم المعرفة إلى بُنى فرعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Frame.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لغة الإطار",
    "root": "غير متوفر",
    "meaning": "لغة تستخدم الإطارات لتمثيل المعرفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Frame Language.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مشكلة الإطار",
    "root": "غير متوفر",
    "meaning": "مشكلة تحديد ما يبقى دون تغيير نتيجة الأفعال أو الأحداث.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Frame Problem.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مسافة بداية فريشيه",
    "root": "غير متوفر",
    "meaning": "مقياس يُستخدم لتقييم جودة الصور المولَّدة عن طريق النماذج التوليدية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fréchet Inception Distance (FID).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي ودِّي",
    "root": "غير متوفر",
    "meaning": "ذكاء عام اصطناعي افتراضي يدعم القيم الإنسانية، وله أثر إيجابي في البشرية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Friendly Artificial Intelligence (FAI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج مُجمَّد",
    "root": "غير متوفر",
    "meaning": "نموذج تُثبَّت مُعامِلاته لمنع المزيد من التدريب أو التعديل، غالبًا لتسهيل عملية النشر أو الاستنتاج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Frozen Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طبقة متصلة كليًّا",
    "root": "غير متوفر",
    "meaning": "طبقة مخفية في شبكة عصبية اصطناعية تتصل كل عقدة فيها بكل عقدة في الطبقة المخفية التالية. ويُطلق عليها أيضًا \"طبقة كثيفة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fully Connected Layer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "منطق ضبابي",
    "root": "غير متوفر",
    "meaning": "نوع من أنواع النُّظُم المنطقية يُتيح التعبير بطريقة موسعة عن البيانات المنطقية، عن طريق توفير تمييز متعدد القيم بين الصواب والخطأ.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fuzzy Logic.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة ضبابية",
    "root": "غير متوفر",
    "meaning": "قاعدة في المنطق الضبابي مكتوبة على شكل جملة شرطية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Fuzzy Rule.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية اللعبة",
    "root": "غير متوفر",
    "meaning": "فرع من فروع النمذجة الرياضية يهتم بدراسة الصراع والتعاون بين صناع القرار العقلانيين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Game Theory.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدة بوابة تكرارية",
    "root": "غير متوفر",
    "meaning": "نوع من الشبكات العصبية التكرارية المصممة لمعالجة البيانات المتسلسلة باستخدام آليات البوابات للتحكم في تدفق المعلومات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Gated Recurrent Unit (GRU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توزيع جاوسي",
    "root": "غير متوفر",
    "meaning": "انظر \"توزيع طبيعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Gaussian Distribution.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدة الخطأ الخطي الجاوسي (جيلو)",
    "root": "غير متوفر",
    "meaning": "دالة تنشيط تطبق تحويلًا سلسًا غير خطي على المُدْخَلات، عن طريق الاحتمال التراكمي للتوزيع الطبيعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Gaussian Error Linear Unit (GeLU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي عام",
    "root": "غير متوفر",
    "meaning": "انظر \"ذكاء عام اصطناعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: General Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعميم",
    "root": "غير متوفر",
    "meaning": "قدرة النموذج على تقديم تنبؤات صحيحة بناءً على بيانات جديدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generalization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "منحنى التعميم",
    "root": "غير متوفر",
    "meaning": "منحنى خسارة يوضح مجموعة التدريب، ومجموعة التحقق؛ للمساعدة في اكتشاف فرط التخصيص.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generalization Curve.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج إضافي مُعمَّم",
    "root": "غير متوفر",
    "meaning": "نموذج إحصائي يُتيح علاقات مرنة وغير خطية بين المتغير التابع والمتغيرات المستقلة، عن طريق الجمع بين النماذج الخطية والدوال السلسة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generalized Additive Model (GAM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج خطي مُعمَّم",
    "root": "غير متوفر",
    "meaning": "توسيع للانحدار الخطي يُتيح لدوال توزيع المخرجات المختلفة تحديد التباين بين المشاهدات والقيم التنبؤية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generalized Linear Model (GLM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر المعرفة المولَّدة",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر يُولِّد معرفة مفيدة إضافية للنموذج لتحسين فهمه واستجابته للأوامر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generated Knowledge Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة توليدية تنافسية",
    "root": "غير متوفر",
    "meaning": "خوارزمية تعلُّم آلة غير موجَّه مكوَّنة من شبكتين عصبيتين: شبكة مولدة وشبكة تمييزية، تتنافسان في إطار لعبة صفرية الناتج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generative Adversarial Network (GAN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي توليدي",
    "root": "غير متوفر",
    "meaning": "نوع من الذكاء الاصطناعي يمكنه إنشاء محتوى جديد، مثل: النصوص والصور والأصوات والفيديوهات والأكواد البرمجية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generative Artificial Intelligence (GenAI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حلقة تغذية راجعة توليدية",
    "root": "غير متوفر",
    "meaning": "عملية دورة تُغذَّى فيها المخرجات الناتجة عن النموذج مرة أخرى إلى النظام على شكل بيانات تدريب؛ وهو ما يتيح التعلُّم والتحسين المستمر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generative Feedback Loop.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج توليدي للصور",
    "root": "غير متوفر",
    "meaning": "نموذج تعلُّم آلة قادر على إنتاج صور جديدة بناءً على أوصاف نصية أو مُدْخَلات أخرى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generative Image Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج توليدي",
    "root": "غير متوفر",
    "meaning": "نموذج تعلُّم آلة يمكنه إنشاء أمثلة جديدة مشابهة لبيانات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generative Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُحوِّل توليدي مُدرَّب سابقًا (جي بي تي)",
    "root": "غير متوفر",
    "meaning": "عائلة من النماذج اللغوية الكبيرة تعتمد على مُحوِّل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generative Pre-Trained Transformer (GPT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصميم توليدي للمنتجات",
    "root": "غير متوفر",
    "meaning": "البرمجيات التي تُولِّد مسودات بجميع الخصائص والمتطلبات المحددة لإنشاء تصميمات للمنتجات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generative Product Design.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُولِّد",
    "root": "غير متوفر",
    "meaning": "جزء من شبكة توليدية تنافسية يُنشئ بيانات مزيفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Generator.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية جينية",
    "root": "غير متوفر",
    "meaning": "نوع من الخوارزميات التطورية الذي يستخدم مبادئ الانتقاء الطبيعي لإيجاد حلول مناسبة لمشكلات التحسين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Genetic Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم عميق هندسي",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من التعلُّم العميق يركز على تصميم الشبكات العصبية التي يمكنها معالجة البيانات ذات الهياكل الهندسية، مثل الرسوم البيانية والشبكات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Geometric Deep Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توزيع هندسي",
    "root": "غير متوفر",
    "meaning": "توزيع احتمالي يوضح عدد التجارب اللازمة لتحقيق أول نجاح في تجربة برنولي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Geometric Distribution.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحسين سرب الدودة المضيئة",
    "root": "غير متوفر",
    "meaning": "خوارزمية ذكاء سرب تحاكي سلوك الحشرات المضيئة للحصول على الحد الأقصى من دالة الصيغ المتعددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Glowworm Swarm Optimization (GSO).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدرُّج",
    "root": "غير متوفر",
    "meaning": "مُتَّجه للمشتقات الجزئية في دالة النموذج، يقيس التغير في الأوزان بالنظر إلى التغير في الخطأ.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Gradient.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صعود تدرجي",
    "root": "غير متوفر",
    "meaning": "خوارزمية تحسين للعثور على الحد الأقصى للدالة، عن طريق ضبط المُعامِلات بشكل متكرر في اتجاه التدرج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Gradient Ascent.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعزيز تدرجي",
    "root": "غير متوفر",
    "meaning": "أسلوب في تعلُّم الآلة يُستخدم في التصنيف والانحدار لإنشاء نموذج تنبؤ قوي من نماذج تنبؤ ضعيفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Gradient Boosting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قص تدرجي",
    "root": "غير متوفر",
    "meaning": "آلية لتقليل مشكلة انفجار التدرج عن طريق تقييد القيمة القصوى للتدرجات عند تدريب نموذج باستخدام النزول التدرجي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Gradient Clipping.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نزول تدرجي",
    "root": "غير متوفر",
    "meaning": "خوارزمية تحسين للعثور على الحد الأدنى من الدالة، عن طريق اتخاذ خطوات بصورة تكرارية تتناسب مع سالب التدرج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Gradient Descent.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "علم البيانات الشبكي",
    "root": "غير متوفر",
    "meaning": "مجال يستخدم هياكل البيانات الشبكية لفهم العلاقات واستخراج الرؤى من البيانات المترابطة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Graph Data Science.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة بيانات شبكية",
    "root": "غير متوفر",
    "meaning": "قاعدة بيانات تستخدم العُقَد والحافات لتمثيل البيانات وعلاقاتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Graph Database (GDB).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية شبكية",
    "root": "غير متوفر",
    "meaning": "نوع من طُرُق التعلُّم العميق يعالج البيانات الممثَّلة على شكل شبكات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Graph Neural Network (GNN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر شبكية",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر يستخدم تمثيلات البيانات القائمة على الشبكة من أجل تحسين فهم النموذج واستجابته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Graph Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توليد مُعَزَّز بالاسترجاع الشبكي",
    "root": "غير متوفر",
    "meaning": "أسلوب يجمع بين تمثيل المعرفة القائم على الشبكة والتوليد المُعَزَّز بالاسترجاع لتحسين دقة النصوص المولدة وملاءمتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Graph Retrieval-Augmented Generation (GraphRAG).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مسح الشبكة",
    "root": "غير متوفر",
    "meaning": "عملية المرور على جميع العُقَد في الشبكة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Graph Traversal.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج شبكي",
    "root": "غير متوفر",
    "meaning": "فئة من النماذج الإحصائية التي تستخدم الرسوم الشبكية لتمثيل العلاقات الاحتمالية بين المتغيرات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Graphical Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدة معالجة الرسوميات",
    "root": "غير متوفر",
    "meaning": "دائرة إلكترونية تقوم بحوسبة متوازية لتسريع إنشاء الصور لعرضها على جهاز إلكتروني.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Graphics Processing Unit (GPU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية جشعة",
    "root": "غير متوفر",
    "meaning": "خوارزمية تختار أفضل حل فوري لمشكلة ما أثناء إيجاد الحل الأمثل الشامل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Greedy Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة شبكية",
    "root": "غير متوفر",
    "meaning": "مجموعة من أجهزة الحاسب المتصلة بالشبكة، وتعمل كأنها جهاز حاسب عملاق افتراضي لتنفيذ المهام الكبيرة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Grid Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حقيقة أساسية",
    "root": "غير متوفر",
    "meaning": "المعلومات المكتسبة من الملاحظة المباشرة بدلًا من الاستنتاج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ground Truth.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز الانتساب للمجموعة",
    "root": "غير متوفر",
    "meaning": "افتراض أنَّ ما ينطبق على فرد واحد ينطبق على كل أفراد المجموعة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Group Attribution Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هدوب",
    "root": "غير متوفر",
    "meaning": "إطار مفتوح المصدر يوفر معالجة موزَّعة لمجموعات كبيرة من البيانات عبر مجموعات من أجهزة الحاسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hadoop.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام هدوب للملفات الموزَّعة",
    "root": "غير متوفر",
    "meaning": "مُحرِّك تخزين مفتوح المصدر، يعتمد على معمارية نظام ملفات جوجل، ومصمَّم للتخزين الفاعل للملفات الكبيرة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hadoop Distributed File System (HDFS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر صلبة",
    "root": "غير متوفر",
    "meaning": "تعليمات نصية مُصاغة یدویًّا تُعطى للنموذج من أجل الحصول على نوع معين من الاستجابة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hard Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حيلة التهشير",
    "root": "غير متوفر",
    "meaning": "انظر \"تهشير الخصائص\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hashing Trick.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحكم غير ذاتي (أو غير ذاتي)",
    "root": "غير متوفر",
    "meaning": "خاصية نظام يعمل تحت قيود تحكم خارجي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Heteronomy (or Heteronomous).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أسلوب إرشادي",
    "root": "غير متوفر",
    "meaning": "أسلوب لتقديم حل سريع لمشكلة ما قد لا يكون هو الحل الأمثل، ولكنه تقريبي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Heuristic.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بحث إرشادي",
    "root": "غير متوفر",
    "meaning": "أسلوب لإيجاد حل جيد، ليس بالضرورة الحل الأمثل، في غضون فترة زمنية معقولة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Heuristic Search.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طبقة مخفية",
    "root": "غير متوفر",
    "meaning": "طبقة مصطنعة تقع بين طبقتي المُدْخَلات والمخرجات في الشبكة العصبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hidden Layer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع هرمي",
    "root": "غير متوفر",
    "meaning": "نوع من خوارزميات التجميع المناسبة للبيانات الهرمية لتوليد شجرة من المجموعات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hierarchical Clustering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة مفصلية",
    "root": "غير متوفر",
    "meaning": "دالة خسارة للتصنيف الذي يهدف إلى تعظيم الهامش بين أمثلة التدريب والحد، وذلك عن طريق وضع حد القرار أبعد ما يمكن عن كل مثال.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hinge Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات مستثناة",
    "root": "غير متوفر",
    "meaning": "مجموعة البيانات التي لم تُستخدم عن قصد أثناء التدريب، وستُستخدم لتقييم قدرة النموذج على التعميم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Holdout Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توسيع أفقي",
    "root": "غير متوفر",
    "meaning": "طريقة لزيادة الأداء وسعة التخزين والتوفُّر عن طريق تقسيم مجموعات البيانات، ونسخها إلى مجموعات من الخوادم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Horizontal Scaling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تخزين البيانات النشطة",
    "root": "غير متوفر",
    "meaning": "بيانات مخزَّنة يمكن الوصول إليها بسرعة للاستخدام الفوري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hot Data Storage.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعرُّف على الأفعال البشرية",
    "root": "غير متوفر",
    "meaning": "انظر \"تعرُّف على الأفعال\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Human Action Recognition.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعرُّف على النشاط البشري",
    "root": "غير متوفر",
    "meaning": "انظر \"تعرُّف على الأفعال\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Human Activity Recognition (HAR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعزيز البشر",
    "root": "غير متوفر",
    "meaning": "مجال يركز على تعزيز قدرات الإنسان باستخدام التقنية كأنها جزء متكامل مع جسم الإنسان.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Human Augmentation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدخّل بشري",
    "root": "غير متوفر",
    "meaning": "ميزة احتياطية في بوت محادثة تسمح بتولي موظف مركز الاتصال المحادثة بدلًا من بوت المحادثة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Human Takeover.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تفاعل بين الإنسان والحاسب",
    "root": "غير متوفر",
    "meaning": "دراسة تصميم وتنفيذ التفاعل بين المستخدمين وأجهزة الحاسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Human-Computer Interaction (HCI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إنسان في الحلقة",
    "root": "غير متوفر",
    "meaning": "طريقة تدمج المُدْخَلات البشرية في دورة حياة أنظمة الذكاء الاصطناعي لتقديم الملاحظات وتحسين النتائج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Human-in-the-Loop (HITL).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تكامل بين الإنسان والآلة",
    "root": "غير متوفر",
    "meaning": "تكامل التفاعل البشري وقدرات ذكاء الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Human-Machine Teaming.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تفاعل بين الإنسان والروبوت",
    "root": "غير متوفر",
    "meaning": "مجال يركز على تبادل المعلومات والأفعال بين الإنسان والروبوت لأداء المهام عن طريق واجهة المستخدم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Human-Robot Interaction (HRI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت بشري",
    "root": "غير متوفر",
    "meaning": "روبوتات مصممة لتشبه وتحاكي بنية جسم الإنسان وسلوكه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Humanoid Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إرشاد فائق",
    "root": "غير متوفر",
    "meaning": "منهجية بحث عالية المستوى تعمل على أتمتة عملية اختيار الأساليب الإرشادية، أو دمجها لحل مشكلات البحث المعقدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hyper-Heuristic.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة الظل الزائدي",
    "root": "غير متوفر",
    "meaning": "دالة تنشيط تُعيِّن القِيَم المُدْخَلة إلى نطاق يتراوح بين -1 و1.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hyperbolic Tangent (Tanh) Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُعامِل ضبط",
    "root": "غير متوفر",
    "meaning": "مُعامِل يُضبَط قبل بدء عملية التعلُّم للتحكم في سلوك خوارزمية التعلُّم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hyperparameter.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط مُعامِلات الضبط",
    "root": "غير متوفر",
    "meaning": "عملية اختيار مُعامِلات الضبط المثلى لتدريب نموذج ما على مجموعة بيانات معينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hyperparameters Tuning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مستوي متعدد الأبعاد",
    "root": "غير متوفر",
    "meaning": "حد فاصل بين مساحتين فرعيتين يُستخدم لفصل مساحة البيانات من أجل التصنيف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hyperplane.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فرضية",
    "root": "غير متوفر",
    "meaning": "فكرة أو تنبؤ بحاجة إلى بحث واختبار عن طريق التجربة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hypothesis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تضمين المستندات الافتراضي",
    "root": "غير متوفر",
    "meaning": "أسلوب استرجاع يُنشئ تضمينات افتراضية للمستندات، ثم يستخدمها لاسترداد مستندات مماثلة من نفس مساحة التضمين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Hypothetical Document Embeddings (HyDE).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف الصور",
    "root": "غير متوفر",
    "meaning": "انظر \"تَعرُّف على الصور\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Image Classification.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة الصور",
    "root": "غير متوفر",
    "meaning": "استخدام خوارزمية لمعالجة الصور أو استخراج معلومات مفيدة منها. ويُطلق عليه أيضًا \"معالجة الصور الرقمية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Image Processing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تَعرُّف على الصور",
    "root": "غير متوفر",
    "meaning": "عملية تحديد الأشياء أو الأنماط أو المفاهيم الموجودة في الصورة. ويُطلق عليها أيضًا \"تصنيف الصور\" أو \"تعرُّف مرئي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Image Recognition.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقسيم الصور",
    "root": "غير متوفر",
    "meaning": "عملية تقسيم الصورة الرقمية إلى مجموعات من البكسلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Image Segmentation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إيمج نت",
    "root": "غير متوفر",
    "meaning": "قاعدة بيانات كبيرة للصور تتكون من أكثر من 14 مليون صورة موَصَّفة ومصنَّفة في 20 ألف فئة، معدة لأبحاث رؤية الحاسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: ImageNet.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات غير متوازنة",
    "root": "غير متوفر",
    "meaning": "انظر \"بيانات غير متوازنة الأصناف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Imbalanced Dataset.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز ضمني",
    "root": "غير متوفر",
    "meaning": "نوع من التحيُّز يكون فيه الارتباط أو الافتراض وفقًا لعقل الشخص وذكرياته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Implicit Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استبدال تقديري",
    "root": "غير متوفر",
    "meaning": "عملية وضع بيانات منمذجة أو مقدرة بدلًا من بيانات مفقودة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Imputation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم سياقي",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر يتعلم فيه النموذج أداء المهام، عن طريق تزويده ببعض الأمثلة في سياق مُدْخَلات الأمر. يُطلق عليه أيضًا \"تعلُّم قائم على الأوامر\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: In-Context Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات في قاعدة البيانات",
    "root": "غير متوفر",
    "meaning": "معالجة البيانات وتحليلها مباشرة داخل قاعدة البيانات التي تُخزَّن فيها البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: In-Database Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز داخل المجموعة",
    "root": "غير متوفر",
    "meaning": "نوع من التحيُّز يكون فيه التفضيل لمجموعة الشخص أو خصائصه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: In-Group Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة بيانات في الذاكرة",
    "root": "غير متوفر",
    "meaning": "قاعدة بيانات تخزن البيانات في الذاكرة الرئيسة بدلًا من مُحرِّك الأقراص لتسريع أوقات الاستجابة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: In-Memory Database (IMDB).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية أثناء المعالجة",
    "root": "غير متوفر",
    "meaning": "خوارزمية تُستخدم لتعديل النموذج أثناء تدريبه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: In-Processing Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عدم توافق مقاييس الإنصاف",
    "root": "غير متوفر",
    "meaning": "تصوُّر يقوم على أن بعض مفاهيم الإنصاف لا يمكن تحقيقها في وقت واحد؛ ومِن ثَمّ لا يوجد مقياس واحد لتحديد الإنصاف في جميع مشكلات تعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Incompatibility of Fairness Metrics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم تدريجي",
    "root": "غير متوفر",
    "meaning": "طريقة من طُرُق تعلُّم الآلة يكون التدريب والتعلُّم فيها مستمرًّا كلما ظهرت أمثلة جديدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Incremental Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "متغيرات مستقلة ومتطابقة التوزيع",
    "root": "غير متوفر",
    "meaning": "متغيرات عشوائية مستقلة عن بعضها البعض، ولها نفس التوزيع الاحتمالي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Independent and Identically Distributed (IID) Random Variables.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إنصاف فردي",
    "root": "غير متوفر",
    "meaning": "مقياس إنصاف لفحص ما إذا كان الأفراد المتشابهون قد صُنِّفوا بنفس الطريقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Individual Fairness.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استقراء",
    "root": "غير متوفر",
    "meaning": "انظر \"استدلال استقرائي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Induction.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "برمجة استقرائية",
    "root": "غير متوفر",
    "meaning": "مجال يهتم بتصميم خوارزميات لبرامج حاسب ذات تحكم معقد من مواصفات غير كاملة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Inductive Programming.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استدلال استقرائي",
    "root": "غير متوفر",
    "meaning": "عملية استخلاص استنتاجات عامة من ملاحظات أو أمثلة محددة. ويُطلق عليها أيضًا \"استقراء\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Inductive Reasoning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت صناعي",
    "root": "غير متوفر",
    "meaning": "روبوت مؤتمت وقابل للبرمجة يُستخدم في التطبيقات الصناعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Industrial Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خلية روبوتات صناعية",
    "root": "غير متوفر",
    "meaning": "نظام أو أنظمة روبوت صناعية تشمل آلات ومساحات محمية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Industrial Robot Cell.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مسار روبوت صناعي",
    "root": "غير متوفر",
    "meaning": "مجموعة من خلايا الروبوتات الصناعية التي تؤدي بعض الوظائف مع المعدات المرتبطة بها في أماكن محمية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Industrial Robot Line.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قصور ذاتي",
    "root": "غير متوفر",
    "meaning": "مقياس لمدى نجاح خوارزمية التجميع في تجميع نقاط البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Inertia.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استنتاج",
    "root": "غير متوفر",
    "meaning": "عملية استخدام نموذج مُدرَّب للتنبؤ أو اتخاذ القرارات بناءً على بيانات جديدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Inference.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُحرِّك استنتاج",
    "root": "غير متوفر",
    "meaning": "مُكوِّن من مُكوِّنات النُّظُم الخبيرة يقوم بعملية الاستدلال لاستنتاج معلومات جديدة من الحقائق والقواعد المخزنة في قاعدة المعرفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Inference Engine.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معلومات",
    "root": "غير متوفر",
    "meaning": "بيانات معالجة لها معنى في سياق معين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Information.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استخراج المعلومات",
    "root": "غير متوفر",
    "meaning": "عملية الحصول على المعرفة، عن طريق استعراض النصوص بحثًا عن أصناف محدَّدة للأشياء وعلاقاتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Information Extraction.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استرجاع المعلومات",
    "root": "غير متوفر",
    "meaning": "عملية الحصول على المعلومات ذات الصلة باحتياجات المستخدم من مجموعة كبيرة من البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Information Retrieval.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية المعلومات",
    "root": "غير متوفر",
    "meaning": "دراسة العمليات التي تُجرى على المعلومات الرقمية، مثل: النقل والتخزين والضغط.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Information Theory.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات مُدْخَلة (أو مُدْخَلات)",
    "root": "غير متوفر",
    "meaning": "أي شكل من أشكال البيانات المُدْخَلة إلى نظام معالجة معلومات أو أي من مُكوِّناته لغرض المعالجة أو التخزين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Input Data (or Input).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طبقة مُدْخَلات",
    "root": "غير متوفر",
    "meaning": "الطبقة الأولى في الشبكة العصبية التي تتلقى البيانات المُدْخَلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Input Layer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حالة",
    "root": "غير متوفر",
    "meaning": "انظر \"مثال\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Instance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقسيم الأشياء",
    "root": "غير متوفر",
    "meaning": "مهمة في رؤية الحاسب تتضمن تحديد وتوضيح كل شيء مُميَّز داخل الصورة، وتُعيِّن حدودًا دقيقة واسمًا فريدًا لكل الأشياء فيها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Instance Segmentation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات التعليمات",
    "root": "غير متوفر",
    "meaning": "البيانات التي تحتوي على: أمثلة للمهام، والاستجابات المطلوبة، وأحيانًا سياق إضافي؛ لتحسين نموذج مُدرَّب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Instruction Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط التعليمات",
    "root": "غير متوفر",
    "meaning": "شكل من أشكال الضبط الدقيق يُدرَّب فيه النموذج بناءً على سلسلة من التعليمات لتحسين أدائه في مهام محددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Instruction Tuning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تضخيم الذكاء",
    "root": "غير متوفر",
    "meaning": "استخدام التقنية لزيادة الذكاء البشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intelligence Amplification (IA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعزيز الذكاء",
    "root": "غير متوفر",
    "meaning": "انظر \"ذكاء مُعَزَّز\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intelligence Augmentation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طفرة الذكاء",
    "root": "غير متوفر",
    "meaning": "فرضية تصف حالة يمكن فيها للآلات الفائقة الذكاء أن تنتج آلات أكثر ذكاء، يفوق ذكاؤها الذكاء البشري. يُطلق عليها أيضًا \"تفرُّد تقني\" أو \"تفرُّد\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intelligence Explosion.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وكيل ذكي",
    "root": "غير متوفر",
    "meaning": "كيان ذاتي التحكم يدرك بيئته ويقوم بأفعال لتحقيق أهداف محددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intelligent Agent (IA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أتمتة ذكية",
    "root": "غير متوفر",
    "meaning": "استخدام الذكاء الاصطناعي والتقنيات الأخرى لأداء المهام والعمليات دون تدخل بشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intelligent Automation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحكم ذكي",
    "root": "غير متوفر",
    "meaning": "نوع من آليات التحكم التي تستخدم أساليب الذكاء الاصطناعي المختلفة لمحاكاة خصائص الذكاء البشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intelligent Control.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة ذكية للوثائق",
    "root": "غير متوفر",
    "meaning": "أتمتة استخراج البيانات من المستندات المختلفة ومعالجتها وتحليلها باستخدام تقنيات الذكاء الاصطناعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intelligent Document Processing (IDP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مساعد شخصي ذكي",
    "root": "غير متوفر",
    "meaning": "وكيل برمجيات يستخدم الذكاء الاصطناعي لمساعدة الأشخاص في المهام الأساسية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intelligent Personal Assistant.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُنتَج ذكي",
    "root": "غير متوفر",
    "meaning": "مُنتَج يستخدم التقنية والبيانات والتحليلات لتحسين نفسه بصورة مستمرة وتقديم تجربة مستخدم أفضل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intelligent Product.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت ذكي",
    "root": "غير متوفر",
    "meaning": "روبوت يمكنه تنفيذ المهام عن طريق استشعار محيطه، والتفاعل مع المصادر الخارجية، وتكييف سلوكه وفقًا لذلك.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intelligent Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اتفاق المُوصِّفين",
    "root": "غير متوفر",
    "meaning": "انظر \"اتفاق المُقيِّمين\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Inter-Annotator Agreement.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اتفاق المُقيِّمين",
    "root": "غير متوفر",
    "meaning": "مقياس لحساب عدد المرات التي يتفق فيها المقيِّمون البشريون عند القيام بمهمة ما. ويُطلق عليه أيضًا \"اتفاق المُوصِّفين\" أو \"موثوقية المُقيِّمين\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Inter-Rater Agreement.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "موثوقية المُقيِّمين",
    "root": "غير متوفر",
    "meaning": "انظر \"اتفاق المُقيِّمين\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Inter-Rater Reliability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إنترنت الأشياء",
    "root": "غير متوفر",
    "meaning": "شبكة من الأجهزة الإلكترونية والبرمجيات وأجهزة الاستشعار التي تُتيح للآلات التفاعل مع بعضها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Internet of Things (IoT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "جهاز إنترنت الأشياء",
    "root": "غير متوفر",
    "meaning": "جهاز استشعار أو مُشغِّل في نظام إنترنت الأشياء يتفاعل مع العالم المادي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Internet of Things (IoT) Device.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قابلية الشرح",
    "root": "غير متوفر",
    "meaning": "انظر \"قابلية التفسير\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Interpretability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقاطع على الاتحاد",
    "root": "غير متوفر",
    "meaning": "مقياس لتحديد دقة مهام اكتشاف الأشياء أو الصور عن طريق مقارنة إطار التحديد المتوقع مع إطار التحديد الفعلي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intersection over Union (IoU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دافع داخلي",
    "root": "غير متوفر",
    "meaning": "آلية تشجع الوكيل على أداء سلوك معين نابع من طبيعته، ومن دون تغذية راجعة مباشرة من البيئة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Intrinsic Motivation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مصفوفة العناصر",
    "root": "غير متوفر",
    "meaning": "مصفوفة من التضمينات في أنظمة التوصية مُولَّدة بواسطة تحليل المصفوفة إلى عوامل تتضمن إشارات كامنة حول كل عنصر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Item Matrix.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تكرار",
    "root": "غير متوفر",
    "meaning": "تحديث واحد لأوزان النموذج أثناء التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Iteration.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر تكرارية",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر تُحسِّن الأوامر وتُعدِّلها بناءً على استجابات النموذج، عبر تكرارات متعددة للحصول على نتائج مرغوبة وأكثر دقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Iterative Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صيغة جيسون",
    "root": "غير متوفر",
    "meaning": "صيغة خفيفة لتبادل البيانات يمكن للإنسان قراءتها، وتُستخدم على نطاق واسع لهيكلة البيانات ونقلها بين الأنظمة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: JavaScript Object Notation (JSON).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحقق تقاطعي مُجَزَّأ",
    "root": "غير متوفر",
    "meaning": "أسلوب لتقييم النماذج عن طريق تقسيم مجموعة البيانات إلى عدد (ك) مجموعات فرعية لتدريب النماذج واختبارها بصورة تكرارية، ثم حساب متوسط ​​النتائج لتقدير الأداء العام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: K-Fold Cross-Validation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع بالمتوسط",
    "root": "غير متوفر",
    "meaning": "خوارزمية تجميع تستخدم المتوسط لتصنيف البيانات إلى عدد (ك) من المجموعات بناءً على تشابه خصائصها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: K-Means (or K-Means Clustering).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع بالوسيط",
    "root": "غير متوفر",
    "meaning": "خوارزمية تجميع تستخدم الوسيط لتصنيف البيانات إلى عدد (ك) من المجموعات بناءً على تشابه خصائصها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: K-Medians (or K-Medians Clustering).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع بالمنوال",
    "root": "غير متوفر",
    "meaning": "خوارزمية تجميع تستخدم المنوال لتصنيف البيانات إلى عدد (ك) من المجموعات بناءً على تشابه خصائصها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: K-Modes (or K-Modes Clustering).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية أقرب الجيران",
    "root": "غير متوفر",
    "meaning": "خوارزمية تُصنِّف نقاط البيانات الجديدة بناءً على أغلبية أو متوسط أقرب ​​نقاط البيانات التي عددها (ك) في مجموعة بيانات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: K-Nearest Neighbor (KNN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "كيراس",
    "root": "غير متوفر",
    "meaning": "واجهة برمجة تطبيقات بلغة البايثون تُستخدم في تعلُّم الآلة، وتعمل على عدد من أُطر التعلُّم العميق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Keras.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نواة",
    "root": "غير متوفر",
    "meaning": "انظر \"مُرشِّح\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Kernel.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة النواة",
    "root": "غير متوفر",
    "meaning": "دالة لقياس التشابه بين حالتين وتحويل البيانات إلى فضاء مُتَّجه كثير الأبعاد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Kernel Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "آلة المُتَّجهات الداعمة باستخدام النواة",
    "root": "غير متوفر",
    "meaning": "خوارزمية تصنيف تُحوِّل مُتَّجهات البيانات المُدْخَلة إلى مساحة بُعدية أكثر لزيادة الهامش بين الأصناف الموجبة والسالبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Kernel Support Vector Machine (KSVM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حيلة النواة",
    "root": "غير متوفر",
    "meaning": "طريقة لإسقاط البيانات غير الخطية إلى فضاء ذي أبعاد أكثر لتسهيل تصنيف البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Kernel Trick.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نقطة مهمة",
    "root": "غير متوفر",
    "meaning": "موقع الخصائص ذات الأهمية في الصورة. ويُطلق عليه أيضًا \"مَعلَم\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Keypoint.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بوت محادثة قائم على كلمات مفتاحية",
    "root": "غير متوفر",
    "meaning": "انظر \"بوت محادثة موجَّه\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Keyword-Based Chatbot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة معرفة",
    "root": "غير متوفر",
    "meaning": "قاعدة بيانات تتضمن قواعد الاستنتاج ومعلومات حول الخبرة البشرية في مجال ما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Knowledge Base.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تاريخ آخر تحديث للمعرفة",
    "root": "غير متوفر",
    "meaning": "النقطة الزمنية التي كان فيها آخر تحديث للبيانات المستخدمة لتدريب النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Knowledge Cutoff.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقطير المعرفة",
    "root": "غير متوفر",
    "meaning": "عملية نقل المعرفة من نموذج كبير مُدرَّب سابقًا إلى نموذج أصغر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Knowledge Distillation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هندسة المعرفة",
    "root": "غير متوفر",
    "meaning": "مجال يركز على اكتساب المعرفة من خبراء المجال والمصادر الأخرى، وتخزينها في قاعدة المعرفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Knowledge Engineering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة معرفية",
    "root": "غير متوفر",
    "meaning": "شبكة تُمثِّل أشياء العالم الحقيقي وعلاقاتها. وتُسمَّى أيضًا \"شبكة دلالية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Knowledge Graph.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تمثيل المعرفة",
    "root": "غير متوفر",
    "meaning": "مجال في الذكاء الاصطناعي يركز على تمثيل معلومات العالم الحقيقي في شكل يمكن للحاسب استخدامه لأداء مهام معقدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Knowledge Representation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تمثيل المعرفة والاستدلال",
    "root": "غير متوفر",
    "meaning": "مجال فرعي في الذكاء الاصطناعي يهتم بترميز المعرفة البشرية في أنظمة الحاسب لاستخلاص استنتاجات منطقية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Knowledge Representation and Reasoning (KRR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام قائم على قاعدة معرفة",
    "root": "غير متوفر",
    "meaning": "نظام حاسب يستخدم قاعدة معرفة لتخزين معرفة الخبراء البشريين، إضافة إلى مُحَرِّك استنتاج لحل المشكلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Knowledge-Based System (KBS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تباعد كولباك-ليبلر",
    "root": "غير متوفر",
    "meaning": "مقياس يحدد الفرق بين توزيعين احتماليين. يُطلق عليه أيضًا \"انتروبيا نسبية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Kullback-Leibler (KL) Divergence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة إل 1",
    "root": "غير متوفر",
    "meaning": "دالة خسارة تُستخدم لحساب القيمة المطلقة للفرق بين القيم المتوقعة والقيم الفعلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: L1 Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط إل 1",
    "root": "غير متوفر",
    "meaning": "نوع من الضبط يضيف جزاءً إلى الأوزان بقدر مكافئ لمجموع القيم المطلقة للأوزان.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: L1 Regularization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة إل 2",
    "root": "غير متوفر",
    "meaning": "انظر \"مربع الخسارة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: L2 Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط إل 2",
    "root": "غير متوفر",
    "meaning": "نوع من الضبط يضيف جزاءً إلى الأوزان بقدر مكافئ لمجموع مربعات الأوزان. ويُطلق عليه أيضًا \"ضبط ريدج\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: L2 Regularization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اسم",
    "root": "غير متوفر",
    "meaning": "جانب الإجابة أو النتيجة من مثال في التعلُّم الموجَّه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Label.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تنعيم الأسماء",
    "root": "غير متوفر",
    "meaning": "أسلوب ضبط يُستخدم لمنع فرط التخصيص وتحسين قدرات التعميم في النماذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Label Smoothing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مثال مُسمًّى",
    "root": "غير متوفر",
    "meaning": "مثال يشتمل على اسم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Labeled Example.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُسَمِّي",
    "root": "غير متوفر",
    "meaning": "انظر \"مُوَصِّف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Labeler.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسمية",
    "root": "غير متوفر",
    "meaning": "انظر \"توصيف البيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Labeling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لامدا",
    "root": "غير متوفر",
    "meaning": "انظر \"معدل الضبط\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Lambda.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مَعلَم",
    "root": "غير متوفر",
    "meaning": "انظر \"نقطة مهمة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Landmark.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج لغوي",
    "root": "غير متوفر",
    "meaning": "نموذج يحدد احتمالية وجود تسلسل معين من كلمات في جملة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Language Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج لغوي للتطبيقات الحوارية",
    "root": "غير متوفر",
    "meaning": "نموذج لغوي كبير يعتمد على مُحوِّل لتوليد استجابات تحاورية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Language Model For Dialogue Applications (LaMDA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عمليات لغوية",
    "root": "غير متوفر",
    "meaning": "مجموعة من الممارسات والأدوات التي تمكِّن المؤسسات من إدارة دورة حياة النماذج اللغوية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Language Operations (LangOps).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج لغوي كبير",
    "root": "غير متوفر",
    "meaning": "نموذج لغوي مُكوَّن من عدد كبير من المُعامِلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Large Language Model (LLM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مواءمة النماذج اللغوية الكبيرة",
    "root": "غير متوفر",
    "meaning": "عملية جعل أنظمة النماذج اللغوية الكبيرة تعمل بطرق تتماشى مع الأهداف والقيم الإنسانية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Large Language Model Alignment.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عمليات النماذج اللغوية الكبيرة",
    "root": "غير متوفر",
    "meaning": "مجموعة من الممارسات والأدوات لإدارة دورة حياة النماذج اللغوية الكبيرة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Large Language Model Operations (LLMOps).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تأخير",
    "root": "غير متوفر",
    "meaning": "تأخير في نقل البيانات أو معالجتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Latency.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فضاء كامن",
    "root": "غير متوفر",
    "meaning": "تمثيل للبيانات القليلة الأبعاد يتضمن الخصائص والعلاقات الأساسية في البيانات الأصلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Latent Space.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طبقة",
    "root": "غير متوفر",
    "meaning": "مجموعة من الخلايا العصبية في شبكة عصبية ما، تعالج خصائص المُدْخَلات أو مخرجات تلك الخلايا العصبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Layer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عرض الطبقة",
    "root": "غير متوفر",
    "meaning": "عدد الخلايا العصبية في طبقة معينة من الشبكة العصبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Layer Width.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط طبقات التسوية",
    "root": "غير متوفر",
    "meaning": "أسلوب ضبط دقيق يقتصر تحديثه على طبقات التسوية في النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: LayerNorm Tuning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم كسول",
    "root": "غير متوفر",
    "meaning": "طريقة تعلُّم تؤجل معالجة بيانات التدريب حتى تَلقِّي عملية استعلام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Lazy Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة ريلو المتسربة",
    "root": "غير متوفر",
    "meaning": "دالة تنشيط تسمح بتدرُّج صغير غير صفري لقيم المُدْخَلات السالبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Leaky ReLU Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معدل التعلُّم",
    "root": "غير متوفر",
    "meaning": "مُعامِل ضبط يُستخدم في خوارزميات التحسين لتحديد حجم الخطوة في كل تكرار. ويُطلق عليه أيضًا \"حجم الخطوة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Learning Rate.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية التعلُّم",
    "root": "غير متوفر",
    "meaning": "انظر \"نظرية التعلُّم الحوسبي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Learning Theory.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خطأ تربيعي أقل",
    "root": "غير متوفر",
    "meaning": "طريقة للعثور على أفضل ملاءمة للبيانات لتقليل مربع الأخطاء بين البيانات الفعلية وخط الملاءمة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Least Square Error (LSE).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انحدار المربعات الصغرى",
    "root": "غير متوفر",
    "meaning": "انحدار خطي مُدرَّب، عن طريق تقليل دالة خسارة إل 2.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Least Squares Regression.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحقق تقاطعي عن طريق عزل نقطة",
    "root": "غير متوفر",
    "meaning": "حالة خاصة من التحقق التقاطعي المُجَزَّأ يكون فيها عدد المجموعات مساويًا لعدد المشاهدات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Leave-One-Out Cross-Validation (LOOCV).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجريد",
    "root": "غير متوفر",
    "meaning": "عملية إعادة الكلمات إلى شكلها الأساسي الموجود في القاموس.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Lemmatization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أرجحية",
    "root": "غير متوفر",
    "meaning": "احتمال حدوث حدث ما ضمن فئة أو صنف معين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Likelihood.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "جبر خطي",
    "root": "غير متوفر",
    "meaning": "فرع من فروع الرياضيات يختص بمعالجة المعادلات الخطية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Linear Algebra.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج خطي",
    "root": "غير متوفر",
    "meaning": "طريقة لوصف متغير الاستجابة كمجموعة خطية من متغيرات التنبؤ.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Linear Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انحدار خطي",
    "root": "غير متوفر",
    "meaning": "نوع من التحليل الإحصائي يوضح العلاقة بين عدة متغيرات لإنشاء نموذج تنبؤي وتوضيح الاتجاهات في البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Linear Regression.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انحدار موزون محليًّا",
    "root": "غير متوفر",
    "meaning": "أسلوب غير مُعامِلي ينفذ الانحدار حول نقطة معينة باستخدام بيانات تدريب محلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Locally Weighted Regression (LWR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات الموقع",
    "root": "غير متوفر",
    "meaning": "البيانات المتعلقة بالموقع الجغرافي لجهاز ما أو أصل آخر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Location Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ملف سجل",
    "root": "غير متوفر",
    "meaning": "ملف مُولَّد بواسطة الحاسب يشتمل على سجل لجميع الأنشطة داخل خادم أو نظام تشغيل أو تطبيق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Log File.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة لوغاريثمية",
    "root": "غير متوفر",
    "meaning": "مقياس أداء يُستخدم لتقييم نماذج التصنيف، عن طريق تحديد الفرق بين الاحتمالات المتوقعة والأسماء الفعلية. ويُطلق عليه أيضًا \"خسارة الإنتروبيا التقاطعية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Log Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "احتمالات لوغاريثمية",
    "root": "غير متوفر",
    "meaning": "لوغاريثم احتمالات لحدث ما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Log Odds.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "برمجة منطقية",
    "root": "غير متوفر",
    "meaning": "إحدى طُرُق البرمجة التي يعتمد التنفيذ فيها على قواعد المنطق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Logic Programming.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انحدار لوجستي",
    "root": "غير متوفر",
    "meaning": "نموذج إحصائي يستخدم دالة لوجستية لتحويل تنبؤ النموذج الخطي إلى قيمة بين 0 و 1. ويُطلق عليه أيضًا \"نموذج لوجيت\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Logistic Regression.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لوجيت",
    "root": "غير متوفر",
    "meaning": "مُتَّجه للتنبؤات بدون تسوية ينشئها نموذج التصنيف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Logit.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج لوجيت",
    "root": "غير متوفر",
    "meaning": "انظر \"انحدار لوجستي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Logit Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذاكرة قصيرة المدى مُطَوَّلة",
    "root": "غير متوفر",
    "meaning": "نوع من الشبكات العصبية التكرارية التي تعالج تسلسل البيانات بأداء مقبول لكل التوابع الطويلة والقصيرة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Long Short-Term Memory (LSTM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذاكرة طويلة المدى",
    "root": "غير متوفر",
    "meaning": "ذاكرة تسمح للنموذج بتخزين المعلومات لفترة ممتدة واستخدامها عند توليد الاستجابات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Long-Term Memory.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "منحنى الخسارة",
    "root": "غير متوفر",
    "meaning": "رسم بياني يوضح خطأ النموذج في تكرارات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Loss Curve.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة الخسارة",
    "root": "غير متوفر",
    "meaning": "دالة تُستخدم لتحديد الخطأ بين مخرجات الخوارزمية والقيمة المستهدفة. ويُطلق عليها أيضًا \"دالة التكلفة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Loss Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سطح الخسارة",
    "root": "غير متوفر",
    "meaning": "رسم بياني يمثل الأوزان مقابل الخسارة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Loss Surface.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تَكَيُّف منخفض الرتبة",
    "root": "غير متوفر",
    "meaning": "أسلوب تدريبي لتكييف النماذج مع مهام جديدة عن طريق تقديم عدد صغير من المُعامِلات القابلة للتدريب بدلًا من تعديل جميع المعاملات الأصلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Low Rank Adaptation (LoRA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات الآلة",
    "root": "غير متوفر",
    "meaning": "البيانات المُولَّدة تلقائيًّا بواسطة الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سماع الآلة",
    "root": "غير متوفر",
    "meaning": "انظر \"استماع الآلة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Hearing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء الآلة",
    "root": "غير متوفر",
    "meaning": "انظر \"ذكاء اصطناعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم الآلة",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من الذكاء الاصطناعي يركز على تمكين الآلات من التعلُّم من البيانات وتحسين أدائها في مهام محددة دون الحاجة إلى برمجة صريحة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Learning (ML).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية تعلُّم الآلة",
    "root": "غير متوفر",
    "meaning": "خوارزمية تنشئ نماذج تعلُّم الآلة باستخدام بيانات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Learning Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج تعلُّم الآلة",
    "root": "غير متوفر",
    "meaning": "انظر \"نموذج\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Learning Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عمليات تعلُّم الآلة",
    "root": "غير متوفر",
    "meaning": "مجموعة من الممارسات والأدوات التي تعمل على أتمتة جميع مراحل دورة حياة تعلُّم الآلة وإدارتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Learning Operations (MLOps).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سير عمل تعلُّم الآلة",
    "root": "غير متوفر",
    "meaning": "تسلسل من الخطوات التي تؤتمت عملية بناء نماذج تعلُّم الآلة وتدريبها وتقييمها ونشرها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Learning Pipeline.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استماع الآلة",
    "root": "غير متوفر",
    "meaning": "استخدام معالجة الإشارة وتعلُّم الآلة لتمكين الآلة من فهم الأصوات. ويُطلق عليه أيضًا \"سماع الآلة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Listening.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "منظور الآلة",
    "root": "غير متوفر",
    "meaning": "قدرة النظام على تلقي البيانات من البيئة الخارجية وتفسيرها بطريقة مماثلة لكيفية استخدام البشر حواسهم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Perception.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لمس الآلة",
    "root": "غير متوفر",
    "meaning": "مجال في إدراك الآلة يهتم بمعالجة المعلومات اللمسية بواسطة الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Touch.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ترجمة الآلة",
    "root": "غير متوفر",
    "meaning": "فرع من اللغويات الحوسبية يهتم بترجمة النص أو الكلام من لغة إلى أخرى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Translation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "رؤية الآلة",
    "root": "غير متوفر",
    "meaning": "انظر \"رؤية الحاسب\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Machine Vision.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صنف الأغلبية",
    "root": "غير متوفر",
    "meaning": "الصنف الذي لديه أكبر عدد من الحالات في مجموعة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Majority Class.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سلسلة ماركوف",
    "root": "غير متوفر",
    "meaning": "نموذج عشوائي يصف تسلسل من الأحداث المحتملة التي يعتمد فيها احتمال كل حدث على الحدث السابق فقط. ويُطلق عليه أيضًا \"عملية ماركوف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Markov Chain.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عملية قرار ماركوف",
    "root": "غير متوفر",
    "meaning": "عملية تحكم عشوائي ذات وقت منفصل تُستخدم لنمذجة صنع القرار في مشكلات التحسين عند عدم التيقن.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Markov Decision Process (MDP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عملية ماركوف",
    "root": "غير متوفر",
    "meaning": "انظر \"سلسلة ماركوف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Markov Process.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خاصية ماركوف",
    "root": "غير متوفر",
    "meaning": "مفهوم يصف عملية عشوائية يعتمد فيها احتمال الحالات المستقبلية على الحالة الحالية فقط، وليس على تسلسل من الأحداث التي قبلها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Markov Property.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج لغوي مقنَّع",
    "root": "غير متوفر",
    "meaning": "نموذج لغوي للتنبؤ باحتمالية ملء الكلمات المُرشَّحة للفراغات بناءً على السياق المحيط.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Masked Language Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات رئيسة",
    "root": "غير متوفر",
    "meaning": "مجموعة من المعرفات والسمات التي تحدد كيانات الأعمال الرئيسة، وتوفر سياقًا لعمليات الأعمال.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Master Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إدارة البيانات الرئيسة",
    "root": "غير متوفر",
    "meaning": "الأدوات والعمليات المستخدمة لحوكمة البيانات الرئيسة وصيانتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Master Data Management (MDM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحسين رياضي",
    "root": "غير متوفر",
    "meaning": "انظر \"تحسين\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Mathematical Optimization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ماتبلوتليب",
    "root": "غير متوفر",
    "meaning": "مكتبة رسومية مفتوحة المصدر بلغة بايثون تُستخدم لتصوير جوانب مختلفة من تعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Matplotlib.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل المصفوفة إلى عوامل",
    "root": "غير متوفر",
    "meaning": "آلية لإيجاد المصفوفات التي يقترب حاصل ضربها النقطي من المصفوفة المستهدفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Matrix Factorization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط تسوية أقصى",
    "root": "غير متوفر",
    "meaning": "نوع من الضبط يُقيِّد المعيار الأقصى لمتجهات الوزن في كل طبقة من الشبكة العصبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Max-Norm Regularization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أهمية هامشية قصوى",
    "root": "غير متوفر",
    "meaning": "أسلوب يوازن بين الصلة والتنوع عند استرجاع العناصر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Maximal Marginal Relevance (MMR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقدير الأرجحية الأعلى",
    "root": "غير متوفر",
    "meaning": "طريقة لتحديد قيم المُعامِلات التي تزيد من احتمالية البيانات المرصودة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Maximum Likelihood Estimation (MLE).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "متوسط الخطأ المطلق",
    "root": "غير متوفر",
    "meaning": "مقياس يُستخدم لتقييم دقة النموذج، عن طريق حساب متوسط الفرق المطلق بين القيم المتوقعة والتنبؤ لجميع أمثلة التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Mean Absolute Error (MAE).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "متوسط الخطأ التربيعي",
    "root": "غير متوفر",
    "meaning": "متوسط الخسارة التربيعية لكل مثال، محسوبًا بقسمة الخسارة التربيعية على عدد الأمثلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Mean Squared Error (MSE).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هجوم استنتاج العضوية",
    "root": "غير متوفر",
    "meaning": "هجوم يهدف إلى تحديد ما إذا كانت عينة بيانات استُخدمت في تدريب نموذج تعلُّم الآلة أم لا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Membership Inference Attack.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات وصفيّة",
    "root": "غير متوفر",
    "meaning": "البيانات التي تُعرِّف بيانات أخرى أو تصفها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Metadata.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إدارة البيانات الوصفيَّة",
    "root": "غير متوفر",
    "meaning": "إدارة البيانات التي تصف البيانات الأخرى لضمان إنشائها وتخزينها وصيانتها بطريقة موحدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Metadata Management.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية تحسين إرشادية",
    "root": "غير متوفر",
    "meaning": "إطار خوارزمي عالي المستوى يمكن استخدامه لحل مشكلات التحسين المختلفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Metaheuristic.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم عملية التعلُّم",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من تعلُّم الآلة يُستخدم لاكتشاف خوارزمية التعلُّم أو تحسينها عن طريق التعلُّم من كمية صغيرة من البيانات أو الخبرات من المهام السابقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Metalearning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر وصفية",
    "root": "غير متوفر",
    "meaning": "توجيه عالي المستوى أو مجموعة من التعليمات المقدمة للنموذج لتوجيه كيفية توليد المخرجات المطلوبة. ويُطلق عليها أيضًا \"أوامر النظام\" أو \"رسائل النظام\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Metaprompt.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مقياس",
    "root": "غير متوفر",
    "meaning": "مقياس لتقييم أداء النموذج أثناء التدريب أو الاختبار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Metric.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مقياس ميتيور",
    "root": "غير متوفر",
    "meaning": "مقياس لجودة ترجمة الآلة، عن طريق مقارنة النصوص المولدة بواسطة الآلة بالنصوص المكتوبة بواسطة الإنسان.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Metric for Evaluation of Translation with Explicit Ordering (METEOR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حُزمة صغيرة",
    "root": "غير متوفر",
    "meaning": "مجموعة فرعية صغيرة اختيرت عشوائيًّا من حُزمة أمثلة لاستخدامها في عملية التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Mini Batch.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نزول تدرجي عشوائي بحُزَم صغيرة",
    "root": "غير متوفر",
    "meaning": "خوارزمية نزول تدرجي تقسم بيانات التدريب إلى حُزَم صغيرة لتقدير التدرج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Mini-Batch Stochastic Gradient Descent (SGD).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة التقليل-التعظيم",
    "root": "غير متوفر",
    "meaning": "دالة خسارة تُستخدم في شبكة توليدية تنافسية يحاول فيها المولِّد تقليل هذه الدالة، في حين يحاول المميّز تعظيمها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Minimax Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صنف الأقلية",
    "root": "غير متوفر",
    "meaning": "الصنف الذي لديه أقل عدد من الحالات في مجموعة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Minority Class.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معدل خطأ التصنيف",
    "root": "غير متوفر",
    "meaning": "مقياس لتحديد عدد المرات التي تكون فيها تنبؤات النموذج غير صحيحة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Misclassification Rate.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معدل الخطأ",
    "root": "غير متوفر",
    "meaning": "انظر \"معدل سلبي خاطئ\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Miss Rate.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خليط من الخبراء",
    "root": "غير متوفر",
    "meaning": "أسلوب في تعلُّم الآلة يُقسِّم النموذج إلى شبكات فرعية متعددة تعمل معًا في مهمة ما، وتتخصص كل منها في مجموعة فرعية معينة من البيانات المُدْخَلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Mixture of Experts (MoE).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إم نيست",
    "root": "غير متوفر",
    "meaning": "مجموعة بيانات عامة تشتمل على صور لأرقام مكتوبة بخط اليد تُستخدم لتدريب خوارزميات تعلُّم الآلة الموجَّه واختبارها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: MNIST.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت متنقل",
    "root": "غير متوفر",
    "meaning": "روبوت قادر على التحرك في بيئته، وليس مثبتًا في مكان واحد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Mobile Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صيغة بيانات",
    "root": "غير متوفر",
    "meaning": "فئة عامة للبيانات، مثل: النصوص والصور والأصوات والفيديوهات والأرقام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Modality.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج",
    "root": "غير متوفر",
    "meaning": "تمثيل لما تعلمته خوارزمية تعلُّم الآلة من بيانات التدريب. ويُطلق عليه أيضًا \"نموذج تعلُّم الآلة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معايرة النموذج",
    "root": "غير متوفر",
    "meaning": "عملية تعديل تنبؤات النموذج لتتناسب مع النتائج الفعلية بصورة أفضل، وتحسين الدقة والموثوقية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Model Calibration.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سعة النموذج",
    "root": "غير متوفر",
    "meaning": "قدرة النموذج على تعلُّم مشكلات معقدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Model Capacity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بطاقة النموذج",
    "root": "غير متوفر",
    "meaning": "وثيقة موجزة تقدم معلومات أساسية حول نموذج تعلُّم الآلة، بما في ذلك غرضه وأداؤه وقيوده واعتباراته الأخلاقية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Model Card.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فحص النموذج",
    "root": "غير متوفر",
    "meaning": "أسلوب تحقق يحدد مدى مطابقة النموذج لمواصفات معينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Model Checking.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدهور النموذج",
    "root": "غير متوفر",
    "meaning": "تدهور جودة البيانات التي تولدها نماذج الذكاء الاصطناعي مع مرور الوقت؛ بسبب تدريب النماذج على بيانات أنتجتها نماذج ذكاء اصطناعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Model Collapse.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توازي النموذج",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم لتسريع التدريب أو الاستنتاج بتقسيم النموذج على أجهزة متعددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Model Parallelism.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُعامِل حرارة النموذج",
    "root": "غير متوفر",
    "meaning": "مُعامِل ضبط للتحكم في العشوائية والإبداع في مخرجات النماذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Model Temperature.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اختبار النموذج",
    "root": "غير متوفر",
    "meaning": "عملية تقييم أداء نموذج مدرب تدريبًا كاملًا؛ وذلك باستخدام بيانات الاختبار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Model Testing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدريب النموذج",
    "root": "غير متوفر",
    "meaning": "انظر \"تدريب\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Model Training.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "زخم",
    "root": "غير متوفر",
    "meaning": "أسلوب تحسين للنزول التدرجي يُسرِّع عملية التعلُّم، عن طريق إضافة نسبة مئوية من متجه التحديث السابق إلى متجه التحديث الحالي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Momentum.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بحث مونت كارلو الشجري",
    "root": "غير متوفر",
    "meaning": "خوارزمية لصنع القرار تبحث عن القرارات المثلى في مجال معين، عن طريق الجمع بين محاكاة مونت كارلو وطريقة البحث الشجري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Monte Carlo Tree Search (MCTS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام متعدد الوكلاء",
    "root": "غير متوفر",
    "meaning": "نظام يتكون من عدة وكلاء يتفاعلون في بيئة مشتركة لتحقيق أهداف محددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multi-Agent System (MAS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف متعدد الأصناف",
    "root": "غير متوفر",
    "meaning": "نوع من التصنيف يُميّز بين أكثر من صنفين. ويُطلق عليه أيضًا \"تصنيف متعدد الحدود\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multi-Class Classification.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انحدار لوجستي متعدد الأصناف",
    "root": "غير متوفر",
    "meaning": "استخدام الانحدار اللوجستي لمشكلات التصنيف ذات الأصناف المتعددة. ويُطلق عليه أيضًا \"انحدار متعدد الحدود\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multi-Class Logistic Regression.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انتباه ذاتي متعدد الرؤوس",
    "root": "غير متوفر",
    "meaning": "آلية انتباه ذاتي تُشغِّل انتباهات متعددة بالتوازي للتركيز على مواضع مختلفة من تسلسلات البيانات المُدْخَلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multi-Head Self-Attention.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية متعددة الطبقات",
    "root": "غير متوفر",
    "meaning": "شبكة عصبية تشتمل على أكثر من طبقة من الخلايا العصبية أو العُقَد الاصطناعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multi-layer Neural Network.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة بيانات متعددة النماذج",
    "root": "غير متوفر",
    "meaning": "قاعدة بيانات مصممة لدعم نماذج بيانات متعددة (مثل: الجداول، والمستندات، والشبكات) ضمن نظام متكامل واحد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multi-model Database.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات متعددة الهياكل",
    "root": "غير متوفر",
    "meaning": "عملية تحليل البيانات ذات الأشكال المختلفة، بما في ذلك الصيغ المهيكلة وشبه المهيكلة وغير المهيكلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multi-structured Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحسين متعدد الأسراب",
    "root": "غير متوفر",
    "meaning": "نوع من تحسين سرب الجسيمات يُقدّر الحل للمشكلات المعقدة باستخدام أسراب متعددة بدلًا من سرب واحد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multi-Swarm Optimization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم متعدد المهام",
    "root": "غير متوفر",
    "meaning": "أسلوب لتدريب النموذج على مهام متعددة في وقت واحد لتحسين أدائه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multi-Task Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج متعدد الصيغ",
    "root": "غير متوفر",
    "meaning": "نموذج له مُدْخَلات أو مخرجات بصيغ متعددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multimodal Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أمر متعدد الصيغ",
    "root": "غير متوفر",
    "meaning": "نوع من الأوامر يتضمن أنواعًا متعددة من البيانات، مثل النصوص والصور، لتوجيه استجابات النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multimodal Prompt.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف متعدد الحدود",
    "root": "غير متوفر",
    "meaning": "انظر \"تصنيف متعدد الأصناف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multinomial Classification.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انحدار متعدد الحدود",
    "root": "غير متوفر",
    "meaning": "انظر \"انحدار لوجستي متعدد الأصناف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multinomial Regression.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط الأوامر المتعددة المهام",
    "root": "غير متوفر",
    "meaning": "أسلوب لتكييف نموذج ما لمهام متعددة، عن طريق تعلُّم أمر واحد يمكن نقله إلى المهام المستهدفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Multitask Prompt Tuning (MPT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ن-وحدة",
    "root": "غير متوفر",
    "meaning": "تسلسل من عدد (ن) عنصر في نص.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: N-Gram.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُصنِّف بايز البسيط",
    "root": "غير متوفر",
    "meaning": "مُصنِّف احتمالي يعتمد على نظرية بايز لتحليل البيانات وتصنيفها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Naive Bayes Classifier.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دلالات بسيطة",
    "root": "غير متوفر",
    "meaning": "طريقة لتمثيل المعرفة الأساسية حول مجال معين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Naive Semantics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعرُّف على الكيانات المُسمّاة",
    "root": "غير متوفر",
    "meaning": "عملية تحديد أسماء الكيانات وفئاتها في النص أو الكلام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Named-Entity Recognition (NER).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فخ القيم غير العددية",
    "root": "غير متوفر",
    "meaning": "حالة يصبح فيها عدد في نموذج ما قيمة غير عددية أثناء عملية التدريب؛ وبسببه تصبح الأعداد الأخرى قيمًا غير عددية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: NaN Trap.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي ضيق",
    "root": "غير متوفر",
    "meaning": "انظر \"ذكاء ضيق اصطناعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Narrow Artificial Intelligence (NAI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لغة طبيعية",
    "root": "غير متوفر",
    "meaning": "لغة بشرية يمكن التعبير عنها بنص أو كلام أو إشارة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Natural Language.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توليد اللغات الطبيعية",
    "root": "غير متوفر",
    "meaning": "عملية تحويل البيانات المهيكلة إلى لغة طبيعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Natural Language Generation (NLG).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة اللغات الطبيعية",
    "root": "غير متوفر",
    "meaning": "فرع من فروع الذكاء الاصطناعي يهتم بفهم أو توليد اللغة البشرية سواءٌ كانت على شكل نص أو كلام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Natural Language Processing (NLP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استعلام باللغة الطبيعية",
    "root": "غير متوفر",
    "meaning": "استخدام اللغة الطبيعية لصياغة الاستعلامات التي يمكن لأنظمة الحاسب معالجتها وفهمها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Natural Language Query (NLQ).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فهم اللغات الطبيعية",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من معالجة اللغات الطبيعية يهتم ببناء آلات قادرة على فهم لغة الإنسان الطبيعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Natural Language Understanding (NLU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صنف سلبي",
    "root": "غير متوفر",
    "meaning": "صنف من صنفي التصنيف الثنائي يمثل الاحتمال الآخر للاختبار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Negative Class.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قيمة تنبؤية سلبية",
    "root": "غير متوفر",
    "meaning": "نسبة النتائج السلبية المتوقعة التي تُعد سلبية صحيحة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Negative Predictive Value (NPV).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ترجمة الآلة العصبية",
    "root": "غير متوفر",
    "meaning": "طريقة في ترجمة الآلة تستخدم شبكة عصبية اصطناعية كبيرة للتنبؤ باحتمالية تسلسل من الكلمات، وغالبًا ما تكون في جمل كاملة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Neural Machine Translation (NMT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية",
    "root": "غير متوفر",
    "meaning": "انظر \"شبكة عصبية اصطناعية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Neural Network (NN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدة معالجة عصبية",
    "root": "غير متوفر",
    "meaning": "معالج مصمم خصيصًا لتسريع عمليات حساب الشبكات العصبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Neural Processing Unit (NPU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "آلة تورينج العصبية",
    "root": "غير متوفر",
    "meaning": "معمارية شبكة عصبية تجمع بين الشبكات العصبية التقليدية وموارد الذاكرة الخارجية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Neural Turing Machine (NTM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "رقاقة عصبية",
    "root": "غير متوفر",
    "meaning": "نوع من رقائق الحاسب التي تعمل كشبكة عصبية لتحسين أداء تطبيقات الذكاء الاصطناعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Neuromorphic Chip.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة عصبية",
    "root": "غير متوفر",
    "meaning": "طريقة حوسبية تحاكي الدماغ البشري باستخدام خوارزميات وأجهزة خاصة لتحسين كفاءة الطاقة وسرعة الحوسبة. ويُطلق عليها أيضًا \"هندسة عصبية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Neuromorphic Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هندسة عصبية",
    "root": "غير متوفر",
    "meaning": "انظر \"حوسبة عصبية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Neuromorphic Engineering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خلية عصبية",
    "root": "غير متوفر",
    "meaning": "عقدة في الشبكة العصبية تعالج قيم مُدْخَلات متعددة، وينتج منها قيمة مخرج واحد. يُطلق عليها أيضًا \"خلية عصبية اصطناعية\" أو \"عقدة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Neuron.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عقدة",
    "root": "غير متوفر",
    "meaning": "انظر \"خلية عصبية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Node.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تشويش (أو بيانات مشوِّشة)",
    "root": "غير متوفر",
    "meaning": "بيانات لا معنى لها تؤثِّر في تحليل البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Noise (or Noisy Data).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إزالة غير الأكبر",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم في اكتشاف الأشياء لإزالة إطارات التحديد المتكررة أو المتداخلة، مع الاحتفاظ بمربع واحد فقط لكل شيء مكتشَف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Non-Maximum Suppression (NMS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج غير مُعامِلي",
    "root": "غير متوفر",
    "meaning": "نموذج تعلُّم آلة لا يضع افتراضات محددة حول شكل دالة التعيين، ولا يفترض مجموعة محدودة من المُعامِلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Non-Parametric Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة بيانات غير علائقية",
    "root": "غير متوفر",
    "meaning": "قاعدة بيانات لا تستخدم نموذجًا علائقيًّا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Non-Relational Database.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج غير علائقي",
    "root": "غير متوفر",
    "meaning": "نموذج بيانات منطقي يخزن البيانات ويعالجها دون اتباع نموذج علائقي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Non-Relational Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز عدم الاستجابة",
    "root": "غير متوفر",
    "meaning": "نوع من تحيُّز الاختيار توجد فيه فجوات مشارَكة في البيانات المجموعة. ويُطلق عليه أيضًا \"تحيُّز المشاركة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Non-Response Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات غير تقليدية",
    "root": "غير متوفر",
    "meaning": "البيانات التي تُجمَع أو تُلاحَظ رقميًّا باستخدام تقنيات جديدة، وغالبًا ما تُستخدم في حالات لا علاقة لها بالهدف الأصلي لجمعها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Non-Traditional Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عدم ثبات",
    "root": "غير متوفر",
    "meaning": "خاصية للسلاسل الزمنية التي تتغير بمرور الوقت خصائصها الإحصائية، مثل: المتوسط ​​والتباين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Nonstationarity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توزيع طبيعي",
    "root": "غير متوفر",
    "meaning": "توزيع احتمالي مستمر يُعرَّف بمُعامِلين: المتوسط والانحراف المعياري. ويُطلق عليه أيضًا \"توزيع جاوسي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Normal Distribution.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نو سيكوال",
    "root": "غير متوفر",
    "meaning": "طريقة لتصميم قواعد البيانات تُتيح تخزين البيانات والاستعلام عنها بطريقة مختلفة عن قواعد البيانات العلائقية. ويُطلق عليها أيضًا \"غير علائقية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: NoSQL.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اكتشاف البيانات غير المعتادة",
    "root": "غير متوفر",
    "meaning": "عملية تحديد البيانات الجديدة التي تختلف عن باقي بيانات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Novelty Detection.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أخذ عيِّنات نيوكليوس",
    "root": "غير متوفر",
    "meaning": "انظر \"أخذ عيِّنات أعلى (ب)\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Nucleus Sampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معدل الخطأ الفارغ",
    "root": "غير متوفر",
    "meaning": "مقياس لمدى خطأ المُصنِّف إذا تنبأ بصنف الأغلبية فقط.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Null Error Rate.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات عددية",
    "root": "غير متوفر",
    "meaning": "الخصائص الممثَّلة بأعداد صحيحة أو أرقام حقيقية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Numerical Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نمباي",
    "root": "غير متوفر",
    "meaning": "مكتبة مفتوحة المصدر بلغة البايثون مصممة لإجراء الحسابات العددية والعلمية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: NumPy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شيء",
    "root": "غير متوفر",
    "meaning": "كيان مادي أو مفاهيمي قد يكون له سمة واحدة أو أكثر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Object.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اكتشاف الأشياء",
    "root": "غير متوفر",
    "meaning": "أسلوب في رؤية الحاسب لتحديد أماكن الأشياء وتصنيفها في الصور أو الفيديوهات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Object Detection.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تَعرُّف على الأشياء",
    "root": "غير متوفر",
    "meaning": "أسلوب في رؤية الحاسب لتحديد الأشياء وتصنيفها في الصور أو الفيديوهات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Object Recognition.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تتبُّع الأشياء",
    "root": "غير متوفر",
    "meaning": "أسلوب في رؤية الحاسب لتحديد موقع الأشياء ومراقبتها باستمرار في تسلسل من إطارات الفيديو.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Object Tracking.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هدف",
    "root": "غير متوفر",
    "meaning": "قياس تحاول الخوارزمية تحسينه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Objective.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة الهدف",
    "root": "غير متوفر",
    "meaning": "دالة يحاول النموذج تحسينها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Objective Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نصل أوكام",
    "root": "غير متوفر",
    "meaning": "مبدأ لحل المشكلات يفضّل النماذج الأبسط على النماذج المعقدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Occam's Razor.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استنتاج غير مباشر",
    "root": "غير متوفر",
    "meaning": "عملية توليد التنبؤات على حُزمة من المشاهدات. ويُطلق عليها أيضًا \"استنتاج حُزَمي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Offline Inference.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ترميز الواحد النشط",
    "root": "غير متوفر",
    "meaning": "طريقة لتحويل البيانات إلى مُتَّجهات تُعيَّن فيها جميع العناصر إلى 0 باستثناء عنصر واحد يُعيَّن إلى 1.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: One-Hot Encoding.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف بمثال واحد",
    "root": "غير متوفر",
    "meaning": "انظر \"تعلُّم بمثال واحد\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: One-Shot Classification.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم بمثال واحد",
    "root": "غير متوفر",
    "meaning": "طريقة لتعلُّم مصنِّفات فاعلة من مثال تدريبي واحد. ويُطلق عليها أيضًا \"تصنيف بمثال واحد\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: One-Shot Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر بمثال واحد",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر يُعطى فيه النموذج مثالًا واحدًا للمهمة المطلوبة ضمن الأمر المُدخَل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: One-Shot Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "واحد مقابل الكل",
    "root": "غير متوفر",
    "meaning": "طريقة تصنيف للتعامل مع المشكلات المتعددة الأصناف باستخدام مصنِّفات ثنائية متعددة، بمقدار مُصنِّف ثنائي واحد لكل نتيجة محتملة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: One-vs-All.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استنتاج مباشر",
    "root": "غير متوفر",
    "meaning": "عملية توليد التنبؤات في الوقت الآني عند الطلب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Online Inference.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم الآلة المستمر",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من تعلُّم الآلة يتعلَّم فيه النموذج تدريجيًّا من البيانات الجديدة بطريقة متسلسلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Online Machine Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توصيف معرفي",
    "root": "غير متوفر",
    "meaning": "تمثيل معرفي يتضمن مجموعة من الأصناف والسمات والعلاقات لنمذجة المجالات المعرفية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ontology.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم التوصيف المعرفي",
    "root": "غير متوفر",
    "meaning": "أساليب مبنية على البيانات لبناء توصيف معرفي باستخدام طُرُق تلقائية أو شبه تلقائية تعتمد على التنقيب في النصوص أو تعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ontology Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "برمجيات مفتوحة المصدر",
    "root": "غير متوفر",
    "meaning": "برمجيات كودها متاح يمكن لأي شخص الوصول إليه وتعديله واستخدامه وتوزيعه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Open-Source Software (OSS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة بيانات تشغيلية",
    "root": "غير متوفر",
    "meaning": "قاعدة بيانات تُستخدم لتخزين البيانات ومعالجتها في الوقت الآني.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Operational Database (ODB).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعرُّف آلي على الحروف",
    "root": "غير متوفر",
    "meaning": "برنامج يتعرَّف على النصوص الموجودة في الصور ويُحوّلها إلى نصوص يمكن قراءتها عن طريق الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Optical Character Recognition (OCR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحسين",
    "root": "غير متوفر",
    "meaning": "عملية اختيار أفضل عنصر من جميع البدائل الممكنة. ويُطلق عليها أيضًا \"تحسين رياضي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Optimization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُحسِّن",
    "root": "غير متوفر",
    "meaning": "خوارزمية أو طريقة تُستخدم لتقليل دالة الخسارة عن طريق ضبط مُعامِلات الشبكة العصبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Optimizer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز التجانس خارج المجموعة",
    "root": "غير متوفر",
    "meaning": "الميل لرؤية أعضاء خارج المجموعة على أنهم أكثر تشابهًا من الأعضاء داخلها عند مقارنة خصائصهم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Out-Group Homogeneity Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قيمة شاذة",
    "root": "غير متوفر",
    "meaning": "قيمة ملحوظة في مجموعة بيانات تبدو غير متسقة مع معظم القيم الأخرى أو بعيدة عنها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Outlier.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اكتشاف القيم الشاذة",
    "root": "غير متوفر",
    "meaning": "طريقة لتحديد القيم التي تبدو غير متسقة مع معظم القيم الأخرى في مجموعة البيانات أو بعيدة عنها. ويُطلق عليها أيضًا \"اكتشاف الشذوذ غير الموجَّه\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Outlier Detection.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات مُخرَجة (أو مخرجات)",
    "root": "غير متوفر",
    "meaning": "البيانات الناتجة عن نظام معالجة المعلومات أو أي جزء من أجزائه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Output Data (Or Output).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طبقة مخرجات",
    "root": "غير متوفر",
    "meaning": "الطبقة الأخيرة في الشبكة العصبية التي تشتمل على النتيجة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Output Layer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فرط التخصيص",
    "root": "غير متوفر",
    "meaning": "مشكلة في تعلُّم الآلة تحدث عند إنشاء نموذج يطابق بيانات التدريب بصورة كبيرة تجعله يفشل في التعميم على البيانات الجديدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Overfitting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "زيادة العيِّنات",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم لموازنة البيانات غير المتوازنة الأصناف، عن طريق تكرار أمثلة من صنف الأقلية. ويُطلق عليه ايضًا \"رفع العيِّنات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Oversampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قرصنة القيمة الاحتمالية",
    "root": "غير متوفر",
    "meaning": "انظر \"تلاعب بالبيانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: P-Hacking.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تبطين",
    "root": "غير متوفر",
    "meaning": "عملية إضافة بيانات إضافية حول حدود البيانات المُدْخَلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Padding.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بانداز",
    "root": "غير متوفر",
    "meaning": "أداة مفتوحة المصدر لتحليل البيانات ومعالجتها مبنية على لغة برمجة بايثون.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pandas.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقسيم شامل",
    "root": "غير متوفر",
    "meaning": "مهمة في رؤية الحاسب تجمع بين التقسيم الدلالي وتقسيم الأشياء لتقديم فهم كامل ومفصل للصورة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Panoptic Segmentation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة متوازية",
    "root": "غير متوفر",
    "meaning": "طريقة للتعامل مع الحوسبة العالية عن طريق تقسيم مهام البرنامج وتشغيلها في الوقت نفسه على معالجات متعددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Parallel Processing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استعلام متواز",
    "root": "غير متوفر",
    "meaning": "طريقة لتقسيم جملة الاستعلام إلى عمليات متعددة تُنفَّذ بطريقة متوازية لزيادة سرعة الاستعلام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Parallel Query.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُعامِل",
    "root": "غير متوفر",
    "meaning": "متغير في نموذج يمكن تدريبه بصورة تكرارية بواسطة نظام تعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Parameter.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط دقيق فاعل للمُعامِلات",
    "root": "غير متوفر",
    "meaning": "أسلوب لتكييف النماذج المُدرَّبة سابقًا على مهام محددة، عن طريق تحديث مجموعة فرعية صغيرة من المُعامِلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Parameter Efficient Fine-Tuning (PEFT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خادم المُعامِلات",
    "root": "غير متوفر",
    "meaning": "إطار للتعلُّم العميق الموزَّع الذي يتتبع مُعامِلات النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Parameter Server (PS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحديث المُعامِلات",
    "root": "غير متوفر",
    "meaning": "عملية تعديل مُعامِلات النموذج أثناء التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Parameter Update.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج مُعامِلي",
    "root": "غير متوفر",
    "meaning": "نموذج تعلُّم آلة يضع افتراضات محددة حول شكل دالة التعيين، ويفترض مجموعة محدودة من المُعامِلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Parametric Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وسم أقسام الكلام",
    "root": "غير متوفر",
    "meaning": "عملية تعيين فئة الكلمة حسب خصائصها النحوية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Part-of-Speech Tagging.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اشتقاق جزئي",
    "root": "غير متوفر",
    "meaning": "مشتقة دالة متعددة المتغيرات ينحصر فيها التغير على متغير واحد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Partial Derivative.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عملية قرار ماركوف الملاحظة جزئيًّا",
    "root": "غير متوفر",
    "meaning": "إطار رياضي يُستخدم لنمذجة سيناريوهات اتخاذ القرار في ظل عدم اليقين بشأن الحالة الحالية للبيئة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Partially Observable Markov Decision Process (POMDP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات مهيكلة جزئيًّا",
    "root": "غير متوفر",
    "meaning": "انظر \"بيانات شبه مهيكلة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Partially Structured Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز المشاركة",
    "root": "غير متوفر",
    "meaning": "انظر \"تحيُّز عدم الاستجابة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Participation Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحسين سرب الجسيمات",
    "root": "غير متوفر",
    "meaning": "خوارزمية تحسين مستوحاة من حركة سرب الطيور لإيجاد الحل الأمثل في مساحة الحل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Particle Swarm Optimization (PSO).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إستراتيجية التقسيم",
    "root": "غير متوفر",
    "meaning": "خوارزمية تُقسِّم المتغيرات عبر خوادم المُعامِلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Partitioning Strategy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعرُّف على الأنماط",
    "root": "غير متوفر",
    "meaning": "مجال من مجالات تعلُّم الآلة يركز على تحديد أنماط البيانات أو انتظامها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pattern Recognition.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيرسبترون",
    "root": "غير متوفر",
    "meaning": "خلية عصبية اصطناعية مصممة لإجراء تصنيفات ثنائية عن طريق معالجة البيانات المُدْخَلة وإنتاج مخرجات بناءً على الأوزان المُتعلَّمة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Perceptron.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أداء",
    "root": "غير متوفر",
    "meaning": "مقياس كمي أو نوعي لمدى كفاءة أو صحة النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Performance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ارتباك",
    "root": "غير متوفر",
    "meaning": "مقياس للإشارة إلى مدى فاعلية النموذج في تحقيق مهمته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Perplexity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات شخصية",
    "root": "غير متوفر",
    "meaning": "البيانات المتعلقة بشخص معرَّف أو يمكن التَعرُّف عليه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Personal Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت شخصي",
    "root": "غير متوفر",
    "meaning": "انظر \"روبوت خدمي شخصي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Personal Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت خدمي شخصي",
    "root": "غير متوفر",
    "meaning": "روبوت يستخدمه الشخص العادي لأداء مهام غير تجارية. ويُطلق عليه أيضًا \"روبوت شخصي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Personal Service Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تخصيص",
    "root": "غير متوفر",
    "meaning": "عملية تحليل توجهات المستخدمين وأنماطهم لتخصيص المنتجات للمستخدمين الأفراد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Personalization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سياسة",
    "root": "غير متوفر",
    "meaning": "الربط الاحتمالي للوكيل من الحالات إلى الأفعال في التعلُّم التعزيزي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Policy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدرج السياسة",
    "root": "غير متوفر",
    "meaning": "أسلوب تعلُّم مُعَزَّز يُحسِّن السياسة ذات المُعامِلات باستخدام النزول التدرجي لتعظيم المكافأة المتوقعة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Policy Gradient.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "طبقة تجميع",
    "root": "غير متوفر",
    "meaning": "عملية اختزال مصفوفة أُنشئت بواسطة طبقة ترشيحية إلى مصفوفة أصغر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pooling Layer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صنف إيجابي",
    "root": "غير متوفر",
    "meaning": "صنف من صنفي التصنيف الثنائي يمثل ما يسعى الاختبار للعثور عليه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Positive Class.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قيمة تنبؤية إيجابية",
    "root": "غير متوفر",
    "meaning": "نسبة النتائج الإيجابية المتوقعة التي تُعد إيجابية صحيحة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Positive Predictive Value (PPV).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تفسير لاحق",
    "root": "غير متوفر",
    "meaning": "طرق تُستخدم لفهم وتفسير القرارات أو التنبؤات التي تقدمها النماذج المدربة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Post-Hoc Explanation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة لاحقة",
    "root": "غير متوفر",
    "meaning": "معالجة مخرجات النموذج بعد تشغيل النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Post-Processing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية بعد المعالجة",
    "root": "غير متوفر",
    "meaning": "خوارزمية تُستخدم لتعديل مخرجات النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Post-Processing Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "احتمال لاحق",
    "root": "غير متوفر",
    "meaning": "توزيع احتمالي مشروط يمثل المُعامِلات بعد معاينة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Posterior Probability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية قبل المعالجة",
    "root": "غير متوفر",
    "meaning": "خوارزمية تُستخدم لتعديل بيانات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pre-Processing Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج لغوي مُدرَّب سابقًا",
    "root": "غير متوفر",
    "meaning": "نموذج مُدرَّب على بيانات نصية ضخمة لفهم أنماط اللغة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pre-Trained Language Model (PLM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج مُدرَّب سابقًا",
    "root": "غير متوفر",
    "meaning": "نموذج أو مُكوِّن من نموذج دُرّب باستخدام مجموعة بيانات أخرى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pre-Trained Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدريب سابق",
    "root": "غير متوفر",
    "meaning": "مرحلة التدريب الأولية للنموذج باستخدام مجموعة بيانات كبيرة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pre-Training.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إحكام",
    "root": "غير متوفر",
    "meaning": "مقياس لتحديد نسبة القيم الإيجابية المحدَّدة التي كانت صحيحة فعلًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Precision.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مساحة تحت منحنى الإحكام-الاستدعاء",
    "root": "غير متوفر",
    "meaning": "مساحة تحت منحنى نقاط الإحكام والاستدعاء تُمثِّل قيمًا مختلفة لحدود التصنيف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Precision-Recall Area Under Curve (PR AUC).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "منحنى الإحكام-الاستدعاء",
    "root": "غير متوفر",
    "meaning": "رسم بياني يمثل الإحكام مقابل الاستدعاء عند حدود تصنيف مختلفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Precision-Recall Curve.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قدرة على التنبؤ",
    "root": "غير متوفر",
    "meaning": "قدرة النموذج على توقع النتائج أو تقديرها بدقة استنادًا إلى البيانات المُدْخَلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Predictability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تنبؤ",
    "root": "غير متوفر",
    "meaning": "المُخرَج من نموذج تعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prediction.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز تنبؤي",
    "root": "غير متوفر",
    "meaning": "قيمة تقيس الفرق بين متوسط التنبؤات ومتوسط الأسماء الفعلية في مجموعة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prediction Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات تنبؤية",
    "root": "غير متوفر",
    "meaning": "نوع من تحليلات البيانات، يستخدم البيانات التاريخية والحالية لتقديم تنبؤات مستنيرة حول الأحداث المستقبلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Predictive Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج تنبؤي",
    "root": "غير متوفر",
    "meaning": "نموذج يُتيح التنبؤ بالنتائج المستقبلية أو الأحداث غير المعروفة بناءً على بيانات سابقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Predictive Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تكافؤ تنبؤي",
    "root": "غير متوفر",
    "meaning": "مقياس إنصاف يفحص ما إذا كانت معدلات إحكام المُصنِّف متكافئة لجميع المجموعات الفرعية. ويُطلق عليه أيضًا \"تكافؤ المعدل التنبؤي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Predictive Parity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تكافؤ المعدل التنبؤي",
    "root": "غير متوفر",
    "meaning": "انظر \"تكافؤ تنبؤي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Predictive Rate Parity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام تنبؤي",
    "root": "غير متوفر",
    "meaning": "تطبيق تعلُّم آلة قادر على اكتشاف العلاقات بين المتغيرات في مجموعات البيانات السابقة من أجل التنبؤ بالنتائج المستقبلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Predictive System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط البادئة",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم لتكييف النماذج المُدرَّبة سابقًا على مهام محددة، عن طريق تحسين متجهات متعلقة بمهام معينة وإضافتها كبادئة للمُدْخَلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prefix Tuning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة سابقة",
    "root": "غير متوفر",
    "meaning": "عملية تحويل البيانات الأولية إلى صيغة مفهومة قبل استخدامها في تدريب نموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Preprocessing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات توجيهية",
    "root": "غير متوفر",
    "meaning": "نوع من تحليلات البيانات، يركز على التوصية بالإجراءات التي يمكنك اتخاذها لتحقيق النتائج المرجوة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prescriptive Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مهمة ذرائعية",
    "root": "غير متوفر",
    "meaning": "مهمة في التعلُّم الذاتي التوجيه مصممة لإنشاء تمثيل مفيد للبيانات، دون الحاجة إلى أمثلة مُسمَّاة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pretext Task.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انتشار",
    "root": "غير متوفر",
    "meaning": "نسبة عدد المرات التي تظهر فيها حالة \"نعم\" في عينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prevalence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل المُكوِّن الرئيس",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم لإزالة تكرار المعلومات وتقليل خصائص مجموعة البيانات إلى مُكوِّناتها الرئيسة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Principal Component Analysis (PCA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اعتقاد سابق",
    "root": "غير متوفر",
    "meaning": "الاعتقاد السابق حول البيانات قبل البدء بالتدرب عليها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prior Belief.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "احتمال سابق",
    "root": "غير متوفر",
    "meaning": "توزيع احتمالي يمثل عدم يقينية البيانات قبل معاينتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prior Probability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خصوصية",
    "root": "غير متوفر",
    "meaning": "الحق في التحكم في الوصول إلى العناصر المادية والمعلومات الشخصية واستخدامها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Privacy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج احتمالي",
    "root": "غير متوفر",
    "meaning": "أسلوب يدمج المتغيرات العشوائية في نموذج لتقديم توزيع احتمالي كحل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Probabilistic Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج انحدار احتمالي",
    "root": "غير متوفر",
    "meaning": "نموذج انحدار يستخدم أوزان الخصائص وعدم التيقن بها لتوليد التنبؤ وعدم التيقن به.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Probabilistic Regression Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "احتمال",
    "root": "غير متوفر",
    "meaning": "رقم يمثل فرصة حدوث حدث معين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Probability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت خدمي تجاري",
    "root": "غير متوفر",
    "meaning": "روبوت خدمي يُستخدم لأداء مهام تجارية، ويُشغِّله عامل مدرَّب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Professional Service Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "برولوج",
    "root": "غير متوفر",
    "meaning": "لغة برمجة منطقية تُستخدم بصورة أساسية في الذكاء الاصطناعي واللغويات الحوسبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prolog.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أمر",
    "root": "غير متوفر",
    "meaning": "المُدْخَلات المقدمة للنموذج لتوجيه مخرجاته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prompt.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسلسل الأوامر",
    "root": "غير متوفر",
    "meaning": "أسلوب يتضمن تقسيم مهمة معقدة إلى سلسلة من الأوامر، ويكون مخرج الأمر الأول مُدْخَلًا للأمر الذي يليه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prompt Chaining.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصميم الأوامر",
    "root": "غير متوفر",
    "meaning": "عملية صياغة الأوامر بطريقة فاعلة لتوجيه مخرجات وسلوك النماذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prompt Design.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقطير الأوامر",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم لتبسيط الأوامر وتحسينها، عن طريق تقليل أطوالها، مع الحفاظ على قدراتها في الحصول على الاستجابات المطلوبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prompt Distillation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هندسة الأوامر",
    "root": "غير متوفر",
    "meaning": "عملية تصميم الأوامر المعطاة للنماذج وتنقيحها وتحسينها لتحقيق المخرجات المطلوبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prompt Engineering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حقن الأوامر",
    "root": "غير متوفر",
    "meaning": "نوع من الهجوم السيبراني ​​على نموذج، عن طريق التلاعب بالمُدْخَلات المقدمة له بطريقة تنتج مخرجات غير مرغوبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prompt Injection.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط الأوامر",
    "root": "غير متوفر",
    "meaning": "أسلوب لتكييف نموذج ما على مهام محددة، عن طريق ضبط الأوامر المُدْخَلة، بدلًا من تعديل مُعامِلات النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prompt Tuning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم قائم على الأوامر",
    "root": "غير متوفر",
    "meaning": "انظر \"تعلُّم سياقي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Prompt-Based Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحسين السياسة الأقرب",
    "root": "غير متوفر",
    "meaning": "خوارزمية للتعلُّم المُعَزَّز تُدرِّب الوكيل على تحقيق مهام معقدة، عن طريق تحسين دالة هدف بديلة لتقييد حجم الخطوة في كل تحديث للسياسة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Proximal Policy Optimization (PPO).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سمة بالوكالة",
    "root": "غير متوفر",
    "meaning": "سمة تُستخدم كبديل لسمة حساسة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Proxy Attribute.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اسم بالوكالة",
    "root": "غير متوفر",
    "meaning": "البيانات الخاصة بتقريب الأسماء غير المتوفرة مباشرة في مجموعة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Proxy Label.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تشذيب",
    "root": "غير متوفر",
    "meaning": "عملية تنظيف الأكواد أو النماذج لإزالة الحلول غير المرغوب فيها، وتسهيل صيانة الكود.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pruning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسمية مستعارة",
    "root": "غير متوفر",
    "meaning": "أسلوب في التعلُّم الشبه الموجَّه يُنشئ النموذج فيه أسماء للبيانات غير المُسمَّاة، ثم تُستخدم هذه الأسماء لتدريب النموذج بشكل أكبر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pseudo-Labeling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تبديل بيانات الهوية",
    "root": "غير متوفر",
    "meaning": "عملية وضع بيانات مستعارة بدلًا من معلومات التعريف الشخصية الموجودة في مجموعة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Pseudonymization (or Pseudo-Anonymization).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بايثون",
    "root": "غير متوفر",
    "meaning": "لغة برمجة عالية المستوى تُستخدم لأغراض متعددة، وقد لقيت رواجًا متزايدًا في علم البيانات وتعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Python.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة كيو",
    "root": "غير متوفر",
    "meaning": "دالة في التعلُّم التعزيزي تتنبأ بالعائد عند القيام بفعل معين في حالة ما وعند سياسة معينة. ويُطلق عليها أيضًا \"دالة قيمة الحالة-الفعل\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Q-Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية كيو",
    "root": "غير متوفر",
    "meaning": "خوارزمية تعلُّم تعزيزي تُتيح للوكيل التعلُّم والعمل على النحو الأمثل في مجالات محكومة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Q-Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مشكلة التأهيل",
    "root": "غير متوفر",
    "meaning": "مشكلة تحديد الشروط السابقة للفعل في حالة معينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Qualification Problem.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نقطة تجزيء",
    "root": "غير متوفر",
    "meaning": "نقطة فصل تقسم توزيع الاحتمالات إلى فترات متواصلة باحتمالات متساوية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Quantile.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجميع كمي",
    "root": "غير متوفر",
    "meaning": "عملية توزيع قيم الخاصية في مجموعات بطريقة يكون فيها لكل مجموعة نفس عدد الحالات تقريبًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Quantile Bucketing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجزيء كمي",
    "root": "غير متوفر",
    "meaning": "خوارزمية تطبق التجميع الكمي على خاصية معينة في مجموعة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Quantization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة الكم",
    "root": "غير متوفر",
    "meaning": "مجال ناشئ في علوم الحاسب يستخدم ظواهر ميكانيكا الكم لأغراض حوسبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Quantum Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم الآلة بالكم",
    "root": "غير متوفر",
    "meaning": "مجال يجمع بين حوسبة الكم وخوارزميات تعلُّم الآلة لمعالجة البيانات وحل المشكلات المعقدة بكفاءة أكبر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Quantum Machine Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل الاستعلام",
    "root": "غير متوفر",
    "meaning": "عملية تُستخدم في قواعد البيانات لتحليل الاستعلام وتحسين أدائه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Query Analysis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لغة استعلام",
    "root": "غير متوفر",
    "meaning": "لغة مستخدمة للوصول إلى المعلومات المخزَّنة في قاعدة البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Query Language.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توجيه الاستعلام",
    "root": "غير متوفر",
    "meaning": "عملية توجيه الاستعلامات إلى مصادر البيانات المناسبة لاسترداد المعلومات الأكثر صلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Query Routing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إجابة الأسئلة",
    "root": "غير متوفر",
    "meaning": "عملية تحديد أنسب إجابة لسؤال ما باللغة الطبيعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Question Answering (QA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تفكيك الأسئلة",
    "root": "غير متوفر",
    "meaning": "عملية تقسيم السؤال المعقد أو المركب إلى أسئلة فرعية أبسط يمكن معالجتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Question Decomposition.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لغة آر",
    "root": "غير متوفر",
    "meaning": "لغة برمجة عالية المستوى تُستخدم على نطاق واسع للتحليل الإحصائي وتعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: R Language.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة القاعدة الشعاعية",
    "root": "غير متوفر",
    "meaning": "دالة تشتمل على قيم تعتمد على المسافات من المركز.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Radial Basis Function (RBF).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة دالة القاعدة الشعاعية",
    "root": "غير متوفر",
    "meaning": "شبكة عصبية اصطناعية تستخدم دالة الأساس النصف قطرية كدالة تنشيط لمهام التصنيف غير الخطية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Radial Basis Function Network (RBFN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مؤشر راند",
    "root": "غير متوفر",
    "meaning": "مقياس لتقييم التشابه بين طريقتين للتجميع.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Rand Index.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "غابة عشوائية",
    "root": "غير متوفر",
    "meaning": "طريقة تعلُّم تجميعي تُنشئ عددًا من أشجار القرارات، ثم تجمع مخرجاتها للحصول على أفضل نتيجة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Random Forest.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سياسة عشوائية",
    "root": "غير متوفر",
    "meaning": "سياسة في التعلُّم التعزيزي تختار الفعل عشوائيًّا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Random Policy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "رتبة",
    "root": "غير متوفر",
    "meaning": "الموضع الترتيبي لصنف في نموذج تعلُّم الآلة الذي يرتب الأصناف من الأعلى إلى الأدنى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Rank.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة ترتيبية",
    "root": "غير متوفر",
    "meaning": "دالة خسارة تركز على التنبؤ بالترتيب النسبي للعناصر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ranking Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُقيِّم",
    "root": "غير متوفر",
    "meaning": "انظر \"مُوَصِّف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Rater.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت قابل لإعادة البرمجة",
    "root": "غير متوفر",
    "meaning": "روبوت مصمَّم بطريقة تُمكّن من تعديل حركاته المبرمجة أو وظائفه المساندة، دون الحاجة الى أي تغيير مادي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Re-Programmable Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إعادة ترتيب",
    "root": "غير متوفر",
    "meaning": "خطوة أخيرة في نظام التوصيات تأخذ في الاعتبار المعايير أو القيود الإضافية لإعادة ترتيب العناصر المسجلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Re-Ranking.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات آنية",
    "root": "غير متوفر",
    "meaning": "البيانات التي يمكن الوصول إليها فور توليدها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Real-Time Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر الاستدلال والتصرف",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر يجمع بين الاستدلال والتصرف لتمكين النماذج من حل مهام متنوعة في الاستدلال واتخاذ القرار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reasoning and Acting (ReAct) Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استدلال واتخاذ القرار",
    "root": "غير متوفر",
    "meaning": "جزء من طريقة تمثيل المعرفة والاستدلال يركز على تصميم خوارزميات الاستنتاج وتحليلها وتنفيذها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reasoning and Decision-Making.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استدعاء",
    "root": "غير متوفر",
    "meaning": "مقياس لتحديد نسبة القيم الإيجابية الفعلية التي حُددت تحديدًا صحيحًا. ويُطلق عليه أيضًا \"معدل إيجابي صحيح\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Recall.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مقياس روج",
    "root": "غير متوفر",
    "meaning": "مجموعة من المقاييس المستخدمة لتقييم جودة التلخيص التلقائي وترجمة الآلة، عن طريق قياس التداخل بين المخرجات التي ينشئها النظام والمراجع التي ينشئها الإنسان.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Recall-Oriented Understudy for Gisting Evaluation (ROUGE).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "منحنى دقّة الأداء",
    "root": "غير متوفر",
    "meaning": "تمثيل رسومي لأداء المُصنِّف في جميع الحدود الممكنة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Receiver Operating Characteristic (ROC) Curve.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُحرِّك توصيات",
    "root": "غير متوفر",
    "meaning": "انظر \"نظام توصيات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Recommendation Engine.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام توصيات",
    "root": "غير متوفر",
    "meaning": "نظام يوصي المستخدمين بمجموعة من العناصر بناءً على اختياراتهم وسلوكياتهم. يُطلق عليه أيضًا \"مُحَرِّك توصيات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Recommendation System (or Recommender System).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدة خطية مصححة (ريلو)",
    "root": "غير متوفر",
    "meaning": "دالة تنشيط تُعطي القيمة صفرًا إذا كان المُدْخَل سالبًا أو صفرًا، وتعطي القيمة نفسها إذا كان المُدْخَل موجبًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Rectified Linear Unit (ReLU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية تكرارية",
    "root": "غير متوفر",
    "meaning": "نوع من الشبكات العصبية يُستخدم لفهم المعلومات المتسلسلة، وتحديد الأنماط عن طريق التشغيل عدة مرات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Recurrent Neural Network (RNN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات مرجعية",
    "root": "غير متوفر",
    "meaning": "البيانات المستخدمة لتصنيف البيانات الأخرى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reference Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انعكاس",
    "root": "غير متوفر",
    "meaning": "إطار مُصمَّم لتحسين تعلُّم وأداء النماذج اللغوية، عن طريق التغذية الراجعة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reflexion.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انحدار",
    "root": "غير متوفر",
    "meaning": "انظر \"تحليل الانحدار\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Regression.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل الانحدار",
    "root": "غير متوفر",
    "meaning": "أسلوب إحصائي لتحديد العلاقة بين المتغيرات التابعة والمستقلة. يُطلق عليه أيضًا \"انحدار\" أو \"نموذج انحدار\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Regression Analysis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج انحدار",
    "root": "غير متوفر",
    "meaning": "انظر \"تحليل الانحدار\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Regression Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط",
    "root": "غير متوفر",
    "meaning": "عملية تُستخدم لمنع فرط التخصيص عن طريق إضافة معلومات إضافية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Regularization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معدل الضبط",
    "root": "غير متوفر",
    "meaning": "قيمة تحدد الأهمية النسبية لدالة الضبط. ويُطلق عليها أيضًا \"لامدا\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Regularization Rate.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم تعزيزي",
    "root": "غير متوفر",
    "meaning": "نوع من تعلُّم الآلة يتعلَّم السياسة المثلى عن طريق المكافآت والعقوبات؛ لأجل تحسين إجمالي المكافأة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reinforcement Learning (RL).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم تعزيزي بالتغذية الراجعة البشرية",
    "root": "غير متوفر",
    "meaning": "أسلوب لتحسين جودة مخرجات النماذج عن طريق دمج التغذية الراجعة من التفاعلات أو التقييمات البشرية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reinforcement Learning From Human Feedback (RLHF).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة بيانات علائقية",
    "root": "غير متوفر",
    "meaning": "نوع من قواعد البيانات يُنظِّم البيانات في جداول تحتوي على صفوف وأعمدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Relational Database.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم الآلة العلائقي",
    "root": "غير متوفر",
    "meaning": "نوع من تعلُّم الآلة يركز على التعلُّم من البيانات ذات العلاقات والهياكل المعقدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Relational Machine Learning (RML).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج علائقي",
    "root": "غير متوفر",
    "meaning": "نموذج بيانات ينظم البيانات في جداول تحتوي على صفوف وأعمدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Relational Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استخراج العلاقة",
    "root": "غير متوفر",
    "meaning": "عملية تحديد العلاقات بين الكيانات المذكورة في النص.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Relationship Extraction.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انتروبيا نسبية",
    "root": "غير متوفر",
    "meaning": "انظر \"تباعد كولباك-ليبلر\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Relative Entropy.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اعتمادية",
    "root": "غير متوفر",
    "meaning": "خاصية الاتساق المقصود في السلوك والنتائج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reliability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام تحديد القياسات الحيوية عن بُعد",
    "root": "غير متوفر",
    "meaning": "تقنية تستخدم الذكاء الاصطناعي للتعرُّف على الأفراد عن بُعد، عن طريق مقارنة بيانات قياساتهم الحيوية (مثل: ملامح الوجه أو بصمات الأصابع) بقاعدة بيانات مرجعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Remote Biometric Identification (RBI) System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذاكرة إعادة التشغيل",
    "root": "غير متوفر",
    "meaning": "ذاكرة يستخدمها الوكيل لتخزين التحولات، ويمكن استخدامها لإعادة تشغيل التجربة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Replay Buffer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز الإبلاغ",
    "root": "غير متوفر",
    "meaning": "نوع من التحيُّز يحدث عندما لا يعكس التكرار الموجود في مجموعة البيانات التكرار الموجود في العالم الحقيقي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reporting Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة المكامن",
    "root": "غير متوفر",
    "meaning": "إطار حوسبي يُبسِّط تدريب الشبكات العصبية التكرارية لمعالجة البيانات المتسلسلة والزمنية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reservoir Computing (RC).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مجموع المربعات المتبقية",
    "root": "غير متوفر",
    "meaning": "أسلوب إحصائي لقياس التباين بين البيانات والقيم التي تنبأ بها نموذج التقدير. ويُطلق عليه أيضًا \"مجموع المتبقيات المربعة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Residual Sum of Squares (RSS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صمود",
    "root": "غير متوفر",
    "meaning": "قدرة النظام على استعادة العمليات بسرعة بعد وقوع حادث.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Resilience.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إطار وصف الموارد",
    "root": "غير متوفر",
    "meaning": "نموذج قياسي لتبادل البيانات على الويب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Resource Description Framework (RDF).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي مسؤول",
    "root": "غير متوفر",
    "meaning": "تصميم أنظمة الذكاء الاصطناعي وتطويرها ونشرها بطرق تتوافق مع المبادئ الأخلاقية والقيم المجتمعية والمعايير القانونية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Responsible Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "آلة بولتزمان المقيدة",
    "root": "غير متوفر",
    "meaning": "شبكة عصبية اصطناعية عشوائية تتعلَّم توزيع الاحتمالات على المُدْخَلات، عن طريق تطبيق نماذج شبكية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Restricted Boltzmann Machine (RBM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية ريتي",
    "root": "غير متوفر",
    "meaning": "خوارزمية مطابقة أنماط تُستخدم في محركات القواعد لمقارنة الأنماط بالأشياء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Rete Algorithm.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إعادة تدريب",
    "root": "غير متوفر",
    "meaning": "عملية تحديث النموذج المدرَّب، عن طريق تدريبه ببيانات جديدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Retraining.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توليد مُعَزَّز بالاسترجاع",
    "root": "غير متوفر",
    "meaning": "إطار للذكاء الاصطناعي يدمج بين استرجاع المعلومات الخارجية والنماذج التوليدية لإنتاج استجابات أكثر دقة وملاءمة للسياق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Retrieval-Augmented Generation (RAG).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عائد",
    "root": "غير متوفر",
    "meaning": "إجمالي المكافآت في التعلُّم التعزيزي الذي يتوقعه الوكيل عند اتباع سياسة معينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Return.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مكافأة",
    "root": "غير متوفر",
    "meaning": "نتيجة عددية في التعلُّم التعزيزي تحدده البيئة عند القيام بفعل في حالة ما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reward.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة المكافأة",
    "root": "غير متوفر",
    "meaning": "آلية تحفيز في التعلُّم التعزيزي تُحدد الكيفية التي يلزم الوكيل اتباعها للقيام بأفعال في بيئة ما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reward Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج المكافأة",
    "root": "غير متوفر",
    "meaning": "نموذج متخصص يقدم التوجيه لتحقيق النتائج المرجوة، عن طريق التغذية الراجعة في شكل مكافآت.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Reward Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط ريدج",
    "root": "غير متوفر",
    "meaning": "انظر \"ضبط إل 2\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ridge Regularization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت",
    "root": "غير متوفر",
    "meaning": "جهاز قابل للبرمجة قادر على أداء المهام المطلوبة تلقائيًّا عن طريق استشعار بيئته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام التحكم بالروبوت",
    "root": "غير متوفر",
    "meaning": "مجموعة من التحكم المنطقي ووظائف الطاقة التي تتحكم في الهيكل الميكانيكي للروبوت وتواصله مع البيئة المحيطة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Robot Control System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "صحافة روبوتية",
    "root": "غير متوفر",
    "meaning": "استخدام البرمجيات لكتابة المحتوى دون تدخل بشري. يُطلق عليها أيضًا \"صحافة مؤتمتة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Robot Journalism.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام روبوت",
    "root": "غير متوفر",
    "meaning": "نظام يتضمن روبوتًا واحدًا أو أكثر وأجهزة أخرى تدعمه لأداء مهامه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Robot System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أتمتة روبوتية لسطح المكتب",
    "root": "غير متوفر",
    "meaning": "برمجيات لأتمتة المهام الروتينية المتكررة على سطح مكتب المستخدم، وغالبًا ما تحاكي الإجراءات البشرية لتحسين الكفاءة وتقليل الأخطاء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Robotic Desktop Automation (RDA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "جهاز روبوتي",
    "root": "غير متوفر",
    "meaning": "آلية مشغلة تحقق خصائص الروبوت الصناعي أو الخدمي، ولكنها تفتقد المحاور القابلة للبرمجة أو درجة التحكم الذاتي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Robotic Device.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أتمتة العمليات الروبوتية",
    "root": "غير متوفر",
    "meaning": "نوع من أتمتة العمليات تحاكي فيه البرمجيات أو الروبوتات كيفية إنجاز البشر لمهمة ما.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Robotic Process Automation (RPA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "علم الروبوتات",
    "root": "غير متوفر",
    "meaning": "مجال يركز على تصميم الروبوتات وتطويرها وتطبيقها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Robotics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "متانة",
    "root": "غير متوفر",
    "meaning": "قدرة النظام على الحفاظ على أدائه تحت أي ظرف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Robustness.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر تعيين الدور",
    "root": "غير متوفر",
    "meaning": "أسلوب لهندسة الأوامر يُوجَّه فيه النموذج لتبني دور أو شخصية محددة من أجل تشكيل مخرجاته وأسلوبه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Role Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "جذر متوسط الانحراف التربيعي",
    "root": "غير متوفر",
    "meaning": "انظر \"جذر متوسط الخطأ التربيعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Root Mean Square Deviation (RMSD).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "جذر متوسط الخطأ التربيعي",
    "root": "غير متوفر",
    "meaning": "مقياس الفرق بين القيم المتوقعة والقيم الفعلية. ويُطلق عليه أيضًا \"جذر متوسط الانحراف التربيعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Root Mean Squared Error (RMSE).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انعدام تأثير الدوران",
    "root": "غير متوفر",
    "meaning": "قدرة الخوارزمية على تصنيف الصور تصنيفًا صحيحًا، بغضِّ النظر عن التغيّر في اتجاهها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Rotational Invariance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بوت محادثة قائم على قواعد",
    "root": "غير متوفر",
    "meaning": "انظر \"بوت محادثة موجَّه\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Rule-Based Chatbot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام قائم على قواعد",
    "root": "غير متوفر",
    "meaning": "نظام خبير يتضمن قواعد شرطية بُنيت بالتعلُّم من بيانات حقيقية أو باستخدام معرفة الخبراء.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Rule-Based System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سلامة",
    "root": "غير متوفر",
    "meaning": "الخلو من المخاطر غير المقبولة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Safety.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عينة",
    "root": "غير متوفر",
    "meaning": "عنصر بيانات يمكن لخوارزمية تعلُّم الآلة معالجته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sample.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حجم العينة",
    "root": "غير متوفر",
    "meaning": "عدد المشاهدات الفردية التي تُمثِّل المجموعة في التجربة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sample Size.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز أخذ العيِّنات",
    "root": "غير متوفر",
    "meaning": "نوع من تحيُّز الاختيار لا تُجمع فيه البيانات عشوائيًّا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sampling Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قابلية التوسع",
    "root": "غير متوفر",
    "meaning": "قدرة النظام على التعامل مع كمية العمل المتزايدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Scalability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انعدام تأثير الحجم",
    "root": "غير متوفر",
    "meaning": "قدرة النموذج على الحفاظ على سلوك متسق بغض النظر عن حجم المُدْخَلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Scale Invariance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توزيع-تجميع",
    "root": "غير متوفر",
    "meaning": "نوع من معالجة البيانات الكبيرة يُوزِّع الحوسبة المطلوبة عبر عُقَد مختلفة، ثم يُجمِّع النتائج الإجمالية من كل عقدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Scatter-Gather.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سايكيت-ليرن",
    "root": "غير متوفر",
    "meaning": "مكتبة شهيرة مفتوحة المصدر تُستخدم في تعلُّم الآلة، مكتوبة بلغة بايثون.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Scikit-Learn.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقييم",
    "root": "غير متوفر",
    "meaning": "جزء من نظام التوصية يُعيّن ترتيبًا لكل عنصر أُنشئ بواسطة عملية توليد الترشيحات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Scoring.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استعلام بحثي",
    "root": "غير متوفر",
    "meaning": "كلمة أو مجموعة من الكلمات التي يدخلها المستخدم في مُحَرِّك البحث للعثور على محتوى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Search Query.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أمن",
    "root": "غير متوفر",
    "meaning": "الدرجة التي يحمي بها النظام البيانات والمعلومات، عن طريق السماح بالوصول المناسب إلى البيانات بناءً على مستويات التفويض.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Security.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحيُّز الاختيار",
    "root": "غير متوفر",
    "meaning": "تحيُّز في اختيار البيانات المستخدمة في تدريب نماذج تعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Selection Bias.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصفية انتقائية",
    "root": "غير متوفر",
    "meaning": "عملية تجاهل البيانات المشوِّشة من أجل التركيز على البيانات المهمة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Selective Filtering.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انتباه ذاتي (أو طبقة الانتباه الذاتي)",
    "root": "غير متوفر",
    "meaning": "طبقة في الشبكة العصبية تُخرج تسلسلًا جديدًا من التضمينات، عن طريق تطبيق آلية الانتباه على المعلومات الواردة من عناصر تسلسل المُدْخَلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Self-Attention (or Self-Attention Layer).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي واعٍ بذاته",
    "root": "غير متوفر",
    "meaning": "تصور نظري لذكاء اصطناعي لديه إدراك ووعي بوجوده، وقادر على فهم أفكاره وعواطفه وبيئته.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Self-Aware Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر الاتساق الذاتي",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر يُحسِّن دقة النماذج، عن طريق إنشاء استجابات متعددة لنفس الأمر، واختيار الإجابة الأكثر تكرارًا أو اتساقًا لتكون الإجابة النهائية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Self-Consistency Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر النقد الذاتي",
    "root": "غير متوفر",
    "meaning": "انظر \"أوامر التحسين الذاتي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Self-Criticism Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سيارة ذاتية القيادة",
    "root": "غير متوفر",
    "meaning": "سيارة قادرة على استشعار محيطها والتحرك بتحكم واكتفاء ذاتي. ويُطلق عليها أيضًا \"سيارة بدون سائق\" أو \"سيارة ذاتية التحكم\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Self-Driving Car.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إرشاد ذاتي",
    "root": "غير متوفر",
    "meaning": "طريقة لتحسين قدرة النماذج على اتباع تعليمات اللغات الطبيعية، عن طريق توليد بيانات اتباع التعليمات بنفسها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Self-Instruct.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تسمية ذاتية",
    "root": "غير متوفر",
    "meaning": "نوع من طُرُق التعلُّم الشبه الموجَّه يُدرِّب نموذجًا على بيانات مُسمَّاة، ثم يستخدمه لإعطاء أسماء مستعارة للبيانات غير المُسمَّاة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Self-Labeling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر التحسين الذاتي",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر يُتيح للنموذج تحسين مخرجاته، عن طريق عملية تكرارية من التغذية الراجعة والتحسين. يُطلق عليه أيضًا \"أوامر النقد الذاتي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Self-Refine Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم ذاتي التوجيه",
    "root": "غير متوفر",
    "meaning": "نوع من تعلُّم الآلة يستخدم بيانات غير مُسمَّاة لتعلُّم الخصائص؛ وذلك بالاعتماد على أسماء مستعارة محددة بصورة ذاتية في عملية التوجيه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Self-Supervised Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدريب ذاتي",
    "root": "غير متوفر",
    "meaning": "طريقة تعلُّم ذاتي التوجيه تُستخدم في التصنيف عندما تكون البيانات غير المُسمَّاة أكثر من البيانات المُسمَّاة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Self-Training.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقطيع دلالي",
    "root": "غير متوفر",
    "meaning": "عملية تقسيم نص كبير إلى وحدات أصغر ذات معنى بناءً على معناها أو سياقها الأساسي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Semantic Chunking.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة دلالية",
    "root": "غير متوفر",
    "meaning": "مجال حوسبي يركز على فهم البيانات وتمثيلها ومعالجتها بناءً على معناها وسياقها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Semantic Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "هيكلة دلالية",
    "root": "غير متوفر",
    "meaning": "عملية إنشاء علاقات وروابط ذات معنى بين عناصر البيانات من مصادر مختلفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Semantic Mapping.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة دلالية",
    "root": "غير متوفر",
    "meaning": "انظر \"شبكة معرفية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Semantic Network.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُستدِل دلالي",
    "root": "غير متوفر",
    "meaning": "برمجيات تُستخدم لاستخلاص النتائج المنطقية من مجموعة من الحقائق والبديهيات المؤكدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Semantic Reasoner.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بحث دلالي",
    "root": "غير متوفر",
    "meaning": "أسلوب بحث يفهم المعنى السياقي لاستعلام المستخدم لتقديم نتائج أكثر صلة ودقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Semantic Search.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ويب دلالي",
    "root": "غير متوفر",
    "meaning": "امتداد لشبكة الويب العالمية لتمكين مشاركة البيانات وإعادة استخدامها عبر التطبيقات، عن طريق تحديد مخازن البيانات والمفردات وقواعد التعامل مع البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Semantic Web.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات شبه مهيكلة",
    "root": "غير متوفر",
    "meaning": "البيانات التي لا تخضع لهيكل ثابت، ولكن لها بعض الخصائص التنظيمية. ويُطلق عليها أيضًا \"بيانات مهيكلة جزئيًّا\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Semi-Structured Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اكتشاف الشذوذ شبه الموجَّه",
    "root": "غير متوفر",
    "meaning": "أسلوب يُستخدم لتحديد الأنماط غير المعتادة داخل مجموعة البيانات باستخدام البيانات المُسمَّاة وغير المُسمَّاة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Semi-Supervised Anomaly Detection.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم شبه موجَّه",
    "root": "غير متوفر",
    "meaning": "نوع من تعلُّم الآلة يستفيد من البيانات المُسمَّاة وغير المُسمَّاة للتدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Semi-Supervised Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سمة حساسة",
    "root": "غير متوفر",
    "meaning": "سمة بشرية لها اعتبار خاص لبعض الأسباب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sensitive Attribute.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات حساسة",
    "root": "غير متوفر",
    "meaning": "بيانات قد يسبب إفشاؤها أو سوء استخدامها آثارًا ضارة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sensitive Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دقة الحساسية",
    "root": "غير متوفر",
    "meaning": "معدل صحة تنبؤ النموذج للأسماء الإيجابية عندما تكون بالفعل كذلك.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sensitivity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل الحساسية",
    "root": "غير متوفر",
    "meaning": "عملية تقييم كيفية تأثر مخرجات النموذج بالتغيرات في المُعامِلات المُدْخَلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sensitivity Analysis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل المشاعر",
    "root": "غير متوفر",
    "meaning": "عملية استخدام الخوارزميات الإحصائية أو خوارزميات تعلُّم الآلة لتحديد المشاعر والآراء المضمنة في نص أو صورة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sentiment Analysis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج تسلسلي",
    "root": "غير متوفر",
    "meaning": "نموذج يشتمل على مُدْخَلات ذات اعتماد متسلسل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sequence Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحويل تسلسل إلى تسلسل",
    "root": "غير متوفر",
    "meaning": "نوع من معمارية الشبكة العصبية مصمم لتحويل تسلسل من البيانات إلى تسلسل آخر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sequence-To-Sequence (Seq2Seq).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "روبوت خدمي",
    "root": "غير متوفر",
    "meaning": "روبوت يمكنه أداء مهام مفيدة للبشر أو المعدات باستثناء تطبيقات الأتمتة الصناعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Service Robot.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم سطحي",
    "root": "غير متوفر",
    "meaning": "نوع من خوارزميات تعلُّم الآلة يحتوي عادةً على طبقة واحدة أو عدد محدود من الطبقات للتعلُّم وتمثيل البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Shallow Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذاكرة قصيرة المدى",
    "root": "غير متوفر",
    "meaning": "ذاكرة تُتيح للنموذج الاحتفاظ بالمعلومات واستخدامها في سياق محادثة أو جلسة واحدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Short-Term Memory.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة سيامية",
    "root": "غير متوفر",
    "meaning": "شبكة عصبية تُستخدم لتصنيف الصور عن طريق تدريب شبكتين عصبيتين في وقت واحد لتعلُّم التشابه بين الصور.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Siamese Network.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة سيجمويد",
    "root": "غير متوفر",
    "meaning": "دالة تُعيّن مخرجات الانحدار اللوجستي أو المتعدد الحدود إلى احتمالات قيمتها بين الصفر والواحد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sigmoid Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة الإشارات",
    "root": "غير متوفر",
    "meaning": "مجال هندسي يركز على تحليل الإشارات ومعالجتها، مثل: الصوتيات والصور والفيديوهات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Signal Processing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُعامِل الظل",
    "root": "غير متوفر",
    "meaning": "مقياس يُستخدم لتقييم جودة التجميع، عن طريق قياس مدى تشابه الشيء مع مجموعته مقارنة بالمجموعات الأخرى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Silhouette Coefficient.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم التشابه",
    "root": "غير متوفر",
    "meaning": "نوع من تعلُّم الآلة الموجَّه يُدرِّب مقياسًا للعثور على التشابه بين شيئين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Similarity Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قياس التشابه",
    "root": "غير متوفر",
    "meaning": "مقياس يُستخدم في خوارزميات التجميع لتقييم مدى تشابه مثالين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Similarity Measure.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ربط أحادي",
    "root": "غير متوفر",
    "meaning": "طريقة تجميع تحدد المسافة بين مجموعتين، عن طريق أقصر مسافة بين أي نقطتي بيانات من كل مجموعة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Single Linkage.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تفرُّد",
    "root": "غير متوفر",
    "meaning": "انظر \"طفرة الذكاء\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Singularity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج لغوي صغير",
    "root": "غير متوفر",
    "meaning": "نوع من النماذج اللغوية مصمم للعمل بمُعامِلات وموارد حوسبية أقل مقارنة بالنماذج اللغوية الكبيرة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Small Language Model (SLM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات وسائل التواصل الاجتماعي",
    "root": "غير متوفر",
    "meaning": "البيانات التي يشاركها المستخدمون علنًا على وسائل التواصل الاجتماعي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Social Media Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حوسبة ناعمة",
    "root": "غير متوفر",
    "meaning": "مجموعة من الأساليب الحوسبية التي تتعامل مع النماذج التقريبية، وتُقدِّم حلولًا فاعلة للمشكلات المعقدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Soft Computing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر ناعمة",
    "root": "غير متوفر",
    "meaning": "أسلوب لتحسين مخرجات نموذج مُدرَّب سابقًا، عن طريق إضافة تضمينات غير نصية إلى تضمينات المُدْخَلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Soft Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سوفت ماكس",
    "root": "غير متوفر",
    "meaning": "دالة تعطي احتمالية لكل صنف في نموذج تصنيف متعدد الأصناف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Softmax.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "برمجيات",
    "root": "غير متوفر",
    "meaning": "مجموعة من التعليمات التي تُوجِّه الحاسب لأداء مهام محددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Software.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أدوات تطوير البرمجيات",
    "root": "غير متوفر",
    "meaning": "مجموعة من أدوات تطوير البرمجيات التي تتيح إنشاء تطبيقات على منصة معينة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Software Development Kit (SDK).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "احتمالية سولومونوف",
    "root": "غير متوفر",
    "meaning": "انظر \"احتمال خوارزمي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Solomonoff Probability.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "سباركل",
    "root": "غير متوفر",
    "meaning": "لغة استعلام للوصول إلى بيانات إطار وصف الموارد ومعالجتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: SPARQL Protocol and RDF Query Language (SPARQL).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خاصية متناثرة",
    "root": "غير متوفر",
    "meaning": "مُتَّجه خصائص تكون أغلب قيمه صفرية أو فارغة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sparse Feature.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تمثيل متناثر",
    "root": "غير متوفر",
    "meaning": "تمثيل يشتمل فقط على عناصر غير صفرية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sparse Representation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُتَّجه متناثر",
    "root": "غير متوفر",
    "meaning": "مُتَّجه تكون أغلب قيمه صفرية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sparse Vector.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تناثر",
    "root": "غير متوفر",
    "meaning": "مفهوم في تعلُّم الآلة يصف مجموعة بيانات أو مصفوفة أكثر قيمها صفرية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sparsity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل مكاني",
    "root": "غير متوفر",
    "meaning": "دراسة البيانات القائمة على الموقع لاكتشاف الأنماط والرؤى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Spatial Analysis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "استدلال مكاني-زماني",
    "root": "غير متوفر",
    "meaning": "مجال من مجالات الذكاء الاصطناعي يهتم بالتمثيل والاستدلال في المكان والزمان مثل الإنسان.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Spatial-Temporal Reasoning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دقة التحديد",
    "root": "غير متوفر",
    "meaning": "معدل صحة تنبؤ النموذج للأسماء السلبية عندما تكون بالفعل كذلك. ويُطلق عليه أيضًا \"المعدل السلبي الصحيح\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Specificity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فك الترميز التخميني",
    "root": "غير متوفر",
    "meaning": "أسلوب تحسين يُسرِّع الاستنتاج، عن طريق التنبؤ بالوحدات اللغوية والتحقق من صحتها بالتوازي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Speculative Decoding.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات الكلام",
    "root": "غير متوفر",
    "meaning": "عملية تحليل التسجيلات الصوتية لاستخراج رؤى من اللغة المنطوقة، مثل الكلمات الرئيسة والعواطف والنوايا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Speech Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعرُّف على الكلام",
    "root": "غير متوفر",
    "meaning": "عملية تحويل الكلام إلى نص باستخدام الخوارزميات. ويُطلق عليها أيضًا \"تعرُّف تلقائي على الكلام\" أو \"تحويل الكلام إلى نص\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Speech Recognition.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توليد الكلام",
    "root": "غير متوفر",
    "meaning": "عملية توليد الكلام البشري بطريقة اصطناعية. ويُطلق عليها أيضًا \"تحويل النص إلى كلام\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Speech Synthesis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحويل الكلام إلى نص",
    "root": "غير متوفر",
    "meaning": "انظر \"تعرُّف على الكلام\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Speech-to-Text (STT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة عصبية نبضية",
    "root": "غير متوفر",
    "meaning": "نوع من الشبكات العصبية التي تحاكي نظام الإشارات الموفر للطاقة في الدماغ، وتتواصل فيه الخلايا العصبية بطريقة غير متزامنة، عن طريق القيم الثنائية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Spiking Neural Network (SNN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مربع الخسارة المفصلية",
    "root": "غير متوفر",
    "meaning": "مربع مُخرَج دالة الخسارة المفصلية الذي يتعامل مع القيم الشاذة بطريقة أكثر صرامة من دالة الخسارة المفصلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Squared Hinge Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مربع الخسارة",
    "root": "غير متوفر",
    "meaning": "دالة خسارة تقيس الخطأ بين تنبؤات النموذج والقيم الفعلية، عن طريق تربيع الفرق بينهما. ويُطلق عليها أيضًا \"خسارة إل 2\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Squared Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج الانتشار المستقر",
    "root": "غير متوفر",
    "meaning": "نموذج تعلُّم عميق يُولِّد صورًا من أوصاف نصية باستخدام عملية تُعرَف بالانتشار.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Stable Diffusion.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف قياسي",
    "root": "غير متوفر",
    "meaning": "انظر \"تصنيف\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Standard Classification.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "دالة قيمة الحالة-الفعل",
    "root": "غير متوفر",
    "meaning": "انظر \"دالة كيو\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: State-Action Value Function.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج ثابت",
    "root": "غير متوفر",
    "meaning": "نموذج يُدرَّب مرة واحدة على مجموعة بيانات ثابتة ثم يظل دون تغيير.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Static Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ثبات",
    "root": "غير متوفر",
    "meaning": "خاصية بيانات لها توزيع ثابت على بُعد واحد أو أكثر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Stationarity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف إحصائي",
    "root": "غير متوفر",
    "meaning": "طريقة تعلُّم موجَّه لتدريب النماذج على تصنيف بيانات جديدة غير مُسمَّاة بناءً على بيانات ذات علاقة ومُسمَّاة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Statistical Classification.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم إحصائي",
    "root": "غير متوفر",
    "meaning": "استخدام الأدوات الإحصائية لتحليل البيانات وفهمها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Statistical Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم علائقي إحصائي",
    "root": "غير متوفر",
    "meaning": "فرع من تعلُّم الآلة يجمع بين التعلُّم الإحصائي والتعلُّم العلائقي لمعالجة عدم التيقن في البيانات والتعامل مع الهياكل العلائقية المعقدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Statistical Relational Learning (SRL).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجذيع",
    "root": "غير متوفر",
    "meaning": "عملية إعادة الكلمات إلى شكلها الأساسي، عن طريق إزالة السوابق واللواحق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Stemming.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حجم الخطوة",
    "root": "غير متوفر",
    "meaning": "انظر \"معدل التعلُّم\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Step Size.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر الرجوع إلى العموم",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر يُمكِّن النموذج من تحديد المفاهيم أو المبادئ العامة ذات الصلة، واستخدامها لاستخلاص الاستجابات الصحيحة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Step-Back Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نزول تدرجي عشوائي",
    "root": "غير متوفر",
    "meaning": "خوارزمية نزول تدرجي يكون حجم الحُزمة فيها واحدًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Stochastic Gradient Descent (SGD).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحسين عشوائي",
    "root": "غير متوفر",
    "meaning": "مجموعة من الطُّرُق لتقليل دالة الهدف أو تعظيمها باستخدام متغيرات عشوائية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Stochastic Optimization (SO).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل دلالي عشوائي",
    "root": "غير متوفر",
    "meaning": "طريقة تُستخدم كمُكوِّن دلالي في فهم اللغات الطبيعية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Stochastic Semantic Analysis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات متدفقة",
    "root": "غير متوفر",
    "meaning": "بيانات تصل من مصدر يعمل بصفة مستمرة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Streaming Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي قوي",
    "root": "غير متوفر",
    "meaning": "انظر \"ذكاء عام اصطناعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Strong Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقليل المخاطر الهيكلي",
    "root": "غير متوفر",
    "meaning": "مبدأ استقرائي يُستخدم لمعالجة فرط التخصيص، عن طريق الموازنة بين ملاءمة بيانات التدريب وتعقيد النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Structural Risk Minimization (SRM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات مهيكلة",
    "root": "غير متوفر",
    "meaning": "بيانات منظمة بطريقة محددة سابقًا، وفقًا لمجموعة من القواعد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Structured Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "لغة الاستعلام المهيكلة",
    "root": "غير متوفر",
    "meaning": "لغة استعلام موحدة تُستخدم في قواعد البيانات العلائقية لتعريف البيانات وإدارتها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Structured Query Language (SQL).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أخذ عيِّنات جزئية",
    "root": "غير متوفر",
    "meaning": "أسلوب لتقليل حجم البيانات باختيار مجموعة فرعية من البيانات الأصلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Subsampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي شبه ترميزي",
    "root": "غير متوفر",
    "meaning": "فرع من فروع الذكاء الاصطناعي يهتم بالتعلُّم، عن طريق استخدام المعلومات الضمنية والتمثيل الرقمي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Subsymbolic Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مجموع المتبقيات المربعة",
    "root": "غير متوفر",
    "meaning": "انظر \"مجموع المربعات المتبقية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Sum of Squared Residuals (SSR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء خارق",
    "root": "غير متوفر",
    "meaning": "ذكاء اصطناعي افتراضي يمكنه تجاوز القدرات البشرية. ويُطلق عليه أيضًا \"ذكاء اصطناعي خارق\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Superintelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ضبط دقيق موجَّه",
    "root": "غير متوفر",
    "meaning": "طريقة لتكييف نموذج مُدرَّب سابقًا على مهمة محددة، عن طريق تدريبه على بيانات مُسمَّاة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Supervised Fine-Tuning (SFT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم موجَّه",
    "root": "غير متوفر",
    "meaning": "نوع من تعلُّم الآلة يستخدم مجموعة بيانات مُسمّاة لتدريب نموذج للتنبؤ أو التصنيف.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Supervised Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "آلة المُتَّجهات الداعمة",
    "root": "غير متوفر",
    "meaning": "نموذج تعلُّم آلة موجَّه يُستخدم في تصنيف البيانات وتحليل الانحدار؛ لإيجاد حدود قرار ذات هوامش قصوى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Support Vector Machine (SVM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُتَّجهات داعمة",
    "root": "غير متوفر",
    "meaning": "نقاط البيانات الأقرب إلى المستوى المتعدد الأبعاد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Support Vectors.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء السرب",
    "root": "غير متوفر",
    "meaning": "مجال يركز على السلوك الجماعي للعناصر التي تتفاعل فيما بينها، باستخدام أنظمة لا مركزية وذاتية التنظيم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Swarm Intelligence (SI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "علم الروبوتات السربية",
    "root": "غير متوفر",
    "meaning": "مجال في علم الروبوتات يركز على تنسيق المجموعات الكبيرة من الروبوتات الذاتية التحكم للعمل معًا بصورة جماعية دون تحكم مركزي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Swarm Robotics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي ترميزي",
    "root": "غير متوفر",
    "meaning": "فرع من فروع الذكاء الاصطناعي يهتم بتمثيل المعرفة البشرية في حقائق وقواعد صريحة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Symbolic Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ناقل عصبي",
    "root": "غير متوفر",
    "meaning": "الرابط بين الخلايا العصبية (العقد) في الشبكة العصبية الاصطناعية. يُطلق عليه أيضًا \"ناقل عصبي اصطناعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Synapse.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات مصطنعة",
    "root": "غير متوفر",
    "meaning": "البيانات التي تُنشأ بشكل اصطناعي باستخدام خوارزميات أو عمليات محاكاة لتقليد بيانات العالم الحقيقي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Synthetic Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خاصية مصطنعة",
    "root": "غير متوفر",
    "meaning": "خاصية ولَّدتها واحدة أو أكثر من خصائص المُدْخَلات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Synthetic Feature.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظام",
    "root": "غير متوفر",
    "meaning": "مجموعة من العناصر التي تتفاعل مع بعضها لتحقيق أهداف محددة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: System.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "رسائل النظام",
    "root": "غير متوفر",
    "meaning": "انظر \"أوامر وصفية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: System Message.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر النظام",
    "root": "غير متوفر",
    "meaning": "انظر \"أوامر وصفية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: System Prompt.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خوارزمية كيو مُجَدْوَلَة",
    "root": "غير متوفر",
    "meaning": "طريقة في التعلُّم التعزيزي لتخزين دوال كيو في جدول لكل مجموعة من الحالات والأفعال.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tabular Q-Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة الهدف",
    "root": "غير متوفر",
    "meaning": "نسخة من شبكة عصبية تُستخدم في التعلُّم التعزيزي وتُحدَّث بوتيرة أقل لتحقيق استقرار التعلُّم وتحسين دقة تقدير القيم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Target Network.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إعلان موجَّه",
    "root": "غير متوفر",
    "meaning": "انظر \"توجيه الإعلانات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Targeted Advertising (or Targeted Ads).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تفرُّد تقني",
    "root": "غير متوفر",
    "meaning": "انظر \"طفرة الذكاء\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Technological Singularity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات زمنية",
    "root": "غير متوفر",
    "meaning": "البيانات التي تُجمّع في أوقات مختلفة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Temporal Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم الفرق الزمني",
    "root": "غير متوفر",
    "meaning": "أسلوب تعلُّم غير موجَّه في التعلُّم التعزيزي، يتعلَّم فيه الوكيل التنبؤ بقيمة متغير في نهاية تسلسل من الحالات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Temporal Difference (TD) Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تينسر",
    "root": "غير متوفر",
    "meaning": "مصفوفة متعددة الأبعاد من القيم الرقمية المستخدمة لتمثيل البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tensor.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "درجة تينسر",
    "root": "غير متوفر",
    "meaning": "انظر \"رتبة تينسر\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tensor Degree.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية شبكة تينسر",
    "root": "غير متوفر",
    "meaning": "طريقة رقمية توفر تخزينًا ومعالجة فاعلة للبيانات الكثيرة الأبعاد.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tensor Network Theory (TNT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مرتبة تينسر",
    "root": "غير متوفر",
    "meaning": "انظر \"رتبة تينسر\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tensor Order.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدة معالجة تينسر",
    "root": "غير متوفر",
    "meaning": "دائرة متكاملة طورتها شركة جوجل مصممة خصيصًا لتسريع مهام تعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tensor Processing Unit (TPU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "رتبة تينسر",
    "root": "غير متوفر",
    "meaning": "عدد الأبعاد في تينسر. ويُطلق عليه أيضًا \"مرتبة تينسر\" أو \"درجة تينسر\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tensor Rank.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شكل تينسر",
    "root": "غير متوفر",
    "meaning": "عدد العناصر الموجودة في أبعاد تينسر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tensor Shape.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حجم تينسر",
    "root": "غير متوفر",
    "meaning": "العدد الإجمالي للعناصر في تينسر.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tensor Size.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تينسرفلو",
    "root": "غير متوفر",
    "meaning": "منصة مفتوحة المصدر طورتها شركة جوجل لتطبيقات تعلُّم الآلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tensorflow.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تكرار المصطلح ومعكوس تكرار المستند",
    "root": "غير متوفر",
    "meaning": "مقياس لتقييم أهمية الكلمة في مستند بالنسبة لمجموعة من المستندات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Term Frequency-Inverse Document Frequency (TF-IDF).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات الاختبار (أو مجموعة الاختبار)",
    "root": "غير متوفر",
    "meaning": "البيانات المستخدمة لتقييم أداء نموذج تعلُّم الآلة بعد مرحلتي التدريب والتحقق. ويُطلق عليها أيضًا \"بيانات التقييم\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Test Dataset (or Test Data, Test Set).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خطأ الاختبار",
    "root": "غير متوفر",
    "meaning": "الخطأ الذي يحدث عند تشغيل نموذج على بيانات جديدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Testing Error.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مثال اختبار",
    "root": "غير متوفر",
    "meaning": "مثال من بيانات الاختبار يتكون من خاصية واحدة أو أكثر، وقد يحوي اسمًا أيضًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Testing Example.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات النصوص",
    "root": "غير متوفر",
    "meaning": "انظر \"تنقيب في النصوص\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Text Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تنقيب في النصوص",
    "root": "غير متوفر",
    "meaning": "عملية تطبيق أساليب التنقيب في البيانات لاستخراج الأنماط والرؤى من المستندات النصية. ويُطلق عليها أيضًا \"تحليلات النصوص\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Text Mining.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تلخيص النصوص",
    "root": "غير متوفر",
    "meaning": "عملية إنشاء نسخة مختصرة من نص طويل بطريقة تلقائية، مع الحفاظ على نقاطه الرئيسة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Text Summarization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تقسيم النصوص",
    "root": "غير متوفر",
    "meaning": "عملية تقسيم النص إلى وحدات صغيرة تُسمَّى وحدات لغوية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Text Tokenization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحويل النص إلى كلام",
    "root": "غير متوفر",
    "meaning": "انظر \"توليد الكلام\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Text-to-Speech (TTS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أخذ عيِّنات تومبسون",
    "root": "غير متوفر",
    "meaning": "خوارزمية تعلُّم إرشادية تُنفِّذ الأفعال بطريقة متسلسلة لتوازن بين تعظيم الأداء الفوري وتجميع المعلومات الجديدة التي يمكن أن تحسن الأداء في المستقبل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Thompson Sampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعقيد زمني",
    "root": "غير متوفر",
    "meaning": "مقدار الوقت اللازم لتشغيل خوارزمية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Time Complexity.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليل السلاسل الزمنية",
    "root": "غير متوفر",
    "meaning": "طريقة لتحليل البيانات التي جُمعت خلال فترة زمنية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Time Series Analysis.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ختم زمني",
    "root": "غير متوفر",
    "meaning": "وقت وتاريخ محددان مرتبطان بملف رقمي لتوثيق وقت إنشاء البيانات أو حذفها أو تغييرها أو إرسالها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Time Stamp (or Timestamp).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم الآلة المُصغَّر",
    "root": "غير متوفر",
    "meaning": "مجال فرعي من تعلُّم الآلة يركز على تشغيل نماذج تعلُّم الآلة على الأجهزة المحدودة الموارد، مثل أجهزة إنترنت الأشياء ووحدات التحكم الدقيقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tiny Machine Learning (TinyML).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدة",
    "root": "غير متوفر",
    "meaning": "أصغر وحدة بيانات يعالجها النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Token.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أخذ عيِّنات أعلى (ك)",
    "root": "غير متوفر",
    "meaning": "طريقة لتوليد النصوص تختار الكلمة التالية من عدد (ك) من الكلمات الأكثر احتمالًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Top-K Sampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أخذ عيِّنات أعلى (ب)",
    "root": "غير متوفر",
    "meaning": "طريقة لتوليد النصوص تختار الكلمة التالية من الكلمات الأكثر احتمالًا، التي مجموع احتمالاتها تقارب القيمة (ب). ويُطلق عليها أيضًا \"أخذ عيِّنات نيوكليوس\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Top-P Sampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نمذجة الموضوعات",
    "root": "غير متوفر",
    "meaning": "استخدام أدوات إحصائية أو تعلُّم الآلة لاكتشاف الموضوعات الدلالية في مجموعة من الوثائق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Topic Modeling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تورتش",
    "root": "غير متوفر",
    "meaning": "إطار للحوسبة العلمية مفتوح المصدر، مع دعم واسع لخوارزميات تعلُّم الآلة، مكتوب بلغات البرمجة سي و لوا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Torch.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج مُدرّب",
    "root": "غير متوفر",
    "meaning": "الناتج من عملية تدريب النموذج.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Trained Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تدريب",
    "root": "غير متوفر",
    "meaning": "عملية تحديد أو تحسين المُعامِلات التي تشكل نموذجًا يعتمد على خوارزمية تعلُّم الآلة باستخدام بيانات التدريب. ويُطلق عليها أيضًا \"تدريب النموذج\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Training.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات التدريب (أو مجموعة التدريب)",
    "root": "غير متوفر",
    "meaning": "البيانات التي تٌقدَّم إلى نموذج تعلُّم الآلة أثناء مرحلة التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Training Dataset (or Training Data, Training Set).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خطأ التدريب",
    "root": "غير متوفر",
    "meaning": "الخطأ الذي يحدث عند تشغيل نموذج على بيانات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Training Error.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مثال تدريب",
    "root": "غير متوفر",
    "meaning": "مثال من بيانات التدريب يتكون من خاصية واحدة أو أكثر، وقد يحوي اسمًا أيضًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Training Example.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مسار",
    "root": "غير متوفر",
    "meaning": "تسلسل من المجموعات في التعلُّم التعزيزي التي تُمثِّل تسلسلًا من انتقالات حالة الوكيل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Trajectory.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معالجة العمليات",
    "root": "غير متوفر",
    "meaning": "نوع من الحوسبة يُقسِّم العمل إلى عمليات فردية وغير قابلة للتجزئة لدعم التطبيقات التفاعلية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Transaction Processing.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات عملياتية",
    "root": "غير متوفر",
    "meaning": "البيانات التي تتضمن تفاصيل العمليات أو الأحداث المتعلقة بالأعمال.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Transactional Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تفوق",
    "root": "غير متوفر",
    "meaning": "حالة افتراضية يتفوق فيها الذكاء الاصطناعي على الذكاء البشري، وقد يؤدي إلى قدرات تتجاوز بكثير الفهم البشري أو السيطرة عليه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Transcendence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم منقول",
    "root": "غير متوفر",
    "meaning": "أسلوب في تعلُّم الآلة تتعلَّم فيه الخوارزمية أداء مهمة محددة، ثم تستخدم تلك المعرفة في أداء مهام أخرى.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Transfer Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُحوِّل",
    "root": "غير متوفر",
    "meaning": "معمارية شبكة عصبية لمعالجة البيانات المتسلسلة بالاعتماد على آلية الانتباه الذاتي. ويُطلق عليها أيضًا \"شبكة المُحوِّلات العصبية\" أو \"نموذج مُحوِّل\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Transformer.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج مُحوِّل",
    "root": "غير متوفر",
    "meaning": "انظر \"مُحوِّل\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Transformer Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شبكة المُحوِّلات العصبية",
    "root": "غير متوفر",
    "meaning": "انظر \"مُحوِّل\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Transformer Neural Network.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "انعدام تأثير الإزاحة",
    "root": "غير متوفر",
    "meaning": "قدرة النموذج على التعرُّف على الأنماط أو معالجتها في البيانات المُدْخَلة بغض النظر عن موقعها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Translational Invariance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نقل حرفي",
    "root": "غير متوفر",
    "meaning": "عملية تمثيل الكلمات والعبارات في لغة ما باستخدام الحروف الهجائية للغة أخرى، مع الحفاظ على نطقها الأصلي.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Transliteration.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "شفافية",
    "root": "غير متوفر",
    "meaning": "خاصية في النظام لإيصال المعلومات المناسبة حوله إلى أصحاب المصلحة، وتشمل الميزات والمُكوِّنات والإجراءات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Transparency.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ترشيح معكوس",
    "root": "غير متوفر",
    "meaning": "أسلوب يُتيح رفع عيِّنات مُتَّجه الخصائص من بُعد مصغر إلى بُعد أكبر. ويُطلق عليه أيضًا \"ترشيح متوسع جزئيًّا\" أو \"تفكيك الترشيح\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Transposed Convolution.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مسح شجري",
    "root": "غير متوفر",
    "meaning": "عملية المرور على جميع العُقَد في هيكل بيانات شجري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tree Traversal.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر شجرة الأفكار",
    "root": "غير متوفر",
    "meaning": "أسلوب في هندسة الأوامر يُمكِّن النموذج من توليد واستكشاف مسارات استدلال متعددة، مثل فروع الشجرة، للعثور على أفضل الحلول.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tree-of-Thoughts Prompting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدات ثلاثية",
    "root": "غير متوفر",
    "meaning": "تسلسل من ثلاثة عناصر في نص.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Trigram.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة ثلاثية",
    "root": "غير متوفر",
    "meaning": "دالة خسارة تُستخدم للتأكد من أن العناصر المتشابهة قريبة من بعضها بعضًا، والعناصر غير المتشابهة متباعدة في فضاء التضمين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Triplet Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف سلبي صحيح",
    "root": "غير متوفر",
    "meaning": "نتيجة تنبأ النموذج بأنها سلبية بصورة صحيحة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: True Negative (TN).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معدل سلبي صحيح",
    "root": "غير متوفر",
    "meaning": "انظر \"نوعية\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: True Negative Rate (TPR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تصنيف إيجابي صحيح",
    "root": "غير متوفر",
    "meaning": "نتيجة تنبأ النموذج بأنها إيجابية بصورة صحيحة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: True Positive (TP).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "معدل إيجابي صحيح",
    "root": "غير متوفر",
    "meaning": "انظر \"استدعاء\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: True Positive Rate (TPR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ثقة",
    "root": "غير متوفر",
    "meaning": "مستوى الثقة لدى المستخدم أو صاحب المصلحة في أن النظام أو المنتج سيعمل بالشكل المطلوب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Trust.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "موثوقية",
    "root": "غير متوفر",
    "meaning": "القدرة على تلبية توقعات أصحاب المصلحة بطريقة يمكن التحقق منها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Trustworthiness.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مجموعة علائقية",
    "root": "غير متوفر",
    "meaning": "سجل (أو صف) في قاعدة بيانات علائقية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Tuple.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اختبار تورينج",
    "root": "غير متوفر",
    "meaning": "اختبار طوَّره ألان تورينج لتقييم قدرة الآلة على إظهار سلوك ذكي مكافئ للذكاء البشري.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Turing Test.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عدم إدراك",
    "root": "غير متوفر",
    "meaning": "حالة تتوافر فيها السمات الحساسة، ولكنها ليست مستخدمة في بيانات التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Unawareness.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "فرط التعميم",
    "root": "غير متوفر",
    "meaning": "مشكلة في تعلُّم الآلة تحدث عندما يفشل النموذج في نمذجة تعقيد بيانات التدريب بطريقة كافية، وهو ما يؤدي إلى ضعف القدرة التنبؤية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Underfitting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خفض العيِّنات",
    "root": "غير متوفر",
    "meaning": "انظر \"تقليل العيِّنات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Undersampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي ضار",
    "root": "غير متوفر",
    "meaning": "ذكاء عام اصطناعي افتراضي قد يكون مضرًّا بالإنسانية بدلًا من أن يكون مفيدًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Unfriendly Artificial Intelligence (UFAI).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج لغوي أحادي الاتجاه",
    "root": "غير متوفر",
    "meaning": "نموذج يحدد احتمالية وجود كلمة في نص بناءً على النص الذي يسبقها. يُطلق عليه أيضًا \"نموذج لغوي سببي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Unidirectional Language Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نظرية التقريب الشامل",
    "root": "غير متوفر",
    "meaning": "نظرية أساسية تنص على أن الشبكات العصبية يمكنها تقريب أي دالة مستمرة عند توافر الإعدادات المناسبة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Universal Approximation Theorem.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مثال غير مُسمًّى",
    "root": "غير متوفر",
    "meaning": "مثال يتضمن خصائصَ، ولا يتضمن اسمًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Unlabeled Example.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات غير مهيكلة",
    "root": "غير متوفر",
    "meaning": "البيانات التي ليس لها أي هيكل، أو غير منظمة بطريقة محددة سابقًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Unstructured Data.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تنقيب في البيانات غير المهيكلة",
    "root": "غير متوفر",
    "meaning": "عملية اكتشاف الأنماط في كمية كبيرة من البيانات غير المهيكلة، واستخراج المعلومات المفيدة منها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Unstructured Data Mining.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "اكتشاف الشذوذ غير الموجَّه",
    "root": "غير متوفر",
    "meaning": "انظر \"اكتشاف القيم الشاذة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Unsupervised Anomaly Detection.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم غير موجَّه",
    "root": "غير متوفر",
    "meaning": "نوع من تعلُّم الآلة يكتشف الأنماط في مجموعة بيانات غير مُسمَّاة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Unsupervised Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "رفع العيِّنات",
    "root": "غير متوفر",
    "meaning": "انظر \"زيادة العيِّنات\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Upsampling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "زيادة الوزن",
    "root": "غير متوفر",
    "meaning": "عملية إضافة وزن إلى الصنف الذي قُلِّلت عيناته بمقدار يتناسب مع عامل التقليل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Upweighting.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مستخدِم",
    "root": "غير متوفر",
    "meaning": "شخص أو مجموعة تتفاعل مع نظام أو تستفيد منه.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: User.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مصفوفة المستخدم",
    "root": "غير متوفر",
    "meaning": "مصفوفة في أنظمة التوصية تشتمل على عوامل كامنة حول تفضيلات المستخدم.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: User Matrix.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نُطْق",
    "root": "غير متوفر",
    "meaning": "أي مُدْخَل من مستخدم بشري إلى نظام ذكاء اصطناعي تحاوري، مثل: بوت المحادثة، وأنظمة التعرُّف على الكلام.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Utterance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحقق",
    "root": "غير متوفر",
    "meaning": "عملية تُستخدم أثناء التدريب لتقييم جودة نموذج تعلُّم الآلة وأدائه باستخدام مجموعة تحقق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Validation.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بيانات التحقق (أو مجموعة التحقق)",
    "root": "غير متوفر",
    "meaning": "البيانات المستخدمة لتقييم أداء نموذج تعلُّم الآلة بعد مرحلة التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Validation Dataset (or Validation Data, Validation Set).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مشكلة تلاشي التدرج",
    "root": "غير متوفر",
    "meaning": "حالة تظهر عندما تنخفض قيمة تدرجات الطبقات المخفية في بداية الشبكة العصبية العميقة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Vanishing Gradient Problem.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُرَمِّز تلقائي متغير",
    "root": "غير متوفر",
    "meaning": "شبكة عصبية تتعلم ضغط البيانات إلى تمثيل قليل الأبعاد، ثم إعادة بناء البيانات الأصلية من التمثيل المضغوط.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Variational Autoencoder.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "قاعدة بيانات المتجَهات",
    "root": "غير متوفر",
    "meaning": "قاعدة بيانات مصممة للتخزين والفهرسة والاسترجاع للتمثيلات الرياضية الكثيرة الأبعاد لنقاط البيانات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Vector Database.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "توسيع عمودي",
    "root": "غير متوفر",
    "meaning": "طريقة لزيادة أداء معالجة البيانات، عن طريق تحسين المعالجات أو الذاكرة أو التخزين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Vertical Scaling.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج رؤية لغوي",
    "root": "غير متوفر",
    "meaning": "نموذج متعدد الصيغ يجمع بين البيانات المرئية والنصية لأداء المهام التي تتطلب فهم الصور واللغات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Vision Language Model (VLM).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وحدة معالجة الرؤية",
    "root": "غير متوفر",
    "meaning": "معالج دقيق مصمَّم لتسريع مهام رؤية الحاسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Vision Processing Unit (VPU).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مُحوِّل رؤية",
    "root": "غير متوفر",
    "meaning": "معمارية شبكة عصبية تُطبِّق معمارية المُحوِّلات على مجال رؤية الحاسب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Vision Transformer (ViT).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إجابة الأسئلة المرئية",
    "root": "غير متوفر",
    "meaning": "مهمة الإجابة على أسئلة معينة تتعلق بصورة مُدْخَلة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Visual Question Answering (VQA).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعرُّف مرئي",
    "root": "غير متوفر",
    "meaning": "انظر \"تَعرُّف على الصور\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Visual Recognition.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "بحث مرئي",
    "root": "غير متوفر",
    "meaning": "استخدام صورة أو فيديو للاستعلام عن محتوى مشابه بصريًّا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Visual Search.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ربط وورد",
    "root": "غير متوفر",
    "meaning": "طريقة تجميع تدمج المجموعات بناءً على تقليل الزيادة في التباين داخل المجموعة الجديدة.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Ward’s Linkage.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مسافة واسرستين",
    "root": "غير متوفر",
    "meaning": "انظر \"مسافة نقل التوزيع\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Wasserstein Distance.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "خسارة واسرستين",
    "root": "غير متوفر",
    "meaning": "دالة خسارة مشتقة من مسافة واسرستين، وتُستخدم لقياس الفرق بين توزيعين احتماليين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Wasserstein Loss.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "ذكاء اصطناعي ضعيف",
    "root": "غير متوفر",
    "meaning": "انظر \"ذكاء ضيق اصطناعي\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Weak Artificial Intelligence.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم مُوجَّه ضعيف",
    "root": "غير متوفر",
    "meaning": "طريقة في تعلُّم الآلة تُدرَّب فيها النماذج على بيانات مُسمَّاة بشكل جزئي أو غير دقيق.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Weakly Supervised Learning.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تحليلات الويب",
    "root": "غير متوفر",
    "meaning": "طريقة لجمع بيانات استخدام مواقع الويب وتحليلها وتقديم تقارير عنها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Web Analytics.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "زاحف الويب",
    "root": "غير متوفر",
    "meaning": "بوت تديره مُحَرِّكات البحث لتصفح وفهرسة محتوى مواقع الويب المتاحة على الإنترنت. ويُطلق عليه أيضًا \"عنكبوت الويب\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Web Crawler.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "جارف الويب",
    "root": "غير متوفر",
    "meaning": "برنامج حاسب يستخرج المعلومات من مواقع الويب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Web Scraper.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تجريف الويب",
    "root": "غير متوفر",
    "meaning": "عملية استخراج المعلومات من مواقع الويب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Web Scraping.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عنكبوت الويب",
    "root": "غير متوفر",
    "meaning": "انظر \"زاحف الويب\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Web Spider.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "وزن",
    "root": "غير متوفر",
    "meaning": "مُعامِل في الشبكة العصبية يُحدِّد قوة الاتصال بين الخلايا العصبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Weight.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تهيئة الأوزان",
    "root": "غير متوفر",
    "meaning": "عملية تحديد الأوزان الأولية للشبكة العصبية.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Weight Initialization.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "مربعات صغرى موزونة تناوبيًّا",
    "root": "غير متوفر",
    "meaning": "خوارزمية تُستخدم في أنظمة التوصية؛ لتقليل دالة الهدف أثناء تحليل المصفوفة إلى عوامل.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Weighted Alternating Least Squares (WALS).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "نموذج عريض",
    "root": "غير متوفر",
    "meaning": "نوع من الشبكات العصبية يشتمل على عدد من خصائص المُدْخَلات التي تتصل مباشرةً بعقدة مخرجات.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Wide Model.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "حِمل",
    "root": "غير متوفر",
    "meaning": "مجموعة من المهام المشغَّلة على نظام حاسب معين.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Workload.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "إكسيبشن",
    "root": "غير متوفر",
    "meaning": "معمارية شبكة عصبية ترشيحية تعتمد على طبقات ترشيحية قابلة للفصل عمقًا.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Xception.",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "عدم الاحتفاظ بالبيانات",
    "root": "غير متوفر",
    "meaning": "مبدأ وممارسة عدم تخزين أي بيانات خارج نطاق الغرض المباشر منها.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Zero Data Retention (ZDR).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "تعلُّم بدون أمثلة",
    "root": "غير متوفر",
    "meaning": "طريقة لتمكين النموذج من التعرُّف على الأصناف التي لم يسبق رؤيتها أثناء التدريب.",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Zero-Shot Learning (ZSL).",
    "source": "AI Glossary - Dataset"
  },
  {
    "word": "أوامر بدون أمثلة",
    "root": "غير متوفر",
    "meaning": "انظر \"أوامر مباشرة\".",
    "synonyms": [],
    "antonyms": [],
    "example": "المصطلح الإنجليزي: Zero-Shot Prompting.",
    "source": "AI Glossary - Dataset"
  }
];
