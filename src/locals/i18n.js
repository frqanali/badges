import { createI18n } from 'vue-i18n'

// ✅ Define translations
const messages = {
  en: {
    services: 'services',
    news: 'news',
    whoWeAre: 'who we are',
    info: 'This is a longer card with supporting text below as a natural introduction to adding content. This content is a little longer',
    go: 'go to service ',
    servicename: 'service name ',
    newstitle: 'news title',
    more: 'more',
    newsinfo:
      ' This is a brief description of the news article. Gives readers a preview of the drama.',
    links: 'links',
    site: 'site ',
    gzoffice: 'green zone id office ',

    par1: 'We are a forward-thinking company dedicated to providing innovative solutions to businesses around the world. Our expert team is passionate about helping our clients succeed by offering first-class products and services. With a focus on quality and customer satisfaction, we work hard to make your vision a reality.',
    par2: 'Founded in [year], our company has grown from a small startup to a world leader in [industry]. We pride ourselves on our strong values, commitment to excellence and deep understanding of the challenges our customers face.',
    par3: 'Whether youre looking for creative solutions, technical expertise, or strategic guidance, we are here to help. Our mission is to empower businesses with the tools and knowledge they need to thrive in todays fast-paced world.',
  },
  ar: {
    services: 'الخدمات',
    news: 'الاخبار',
    whoWeAre: 'من نحن',
    info: 'هذه بطاقة أطول مع نص داعم أدناه كمقدمة طبيعية للإضافة محتوى. هذا المحتوى أطول قليلا',
    go: 'انتقل الى الخدمة',
    servicename: 'اسم الخدمة',
    newstitle: ' عنوان الخبر',
    more: 'المزيد',
    newsinfo: ' هذا وصف موجز للمقال الإخباري. يمنح القراء معاينة ل تَمْثِيلِيَّة.',
    links: 'الروابط',
    site: 'الموقع الالكتروني',
    gzoffice: 'مكتب هويات المنطقة الخضراء ',
    par1: ' نحن شركة ذات تفكير مستقبلي مكرسة لتقديم حلول مبتكرة للشركات في جميع أنحاء العالم. فريق الخبراء لدينا متحمس لمساعدة عملائنا على النجاح من خلال تقديم منتجات وخدمات من الدرجة الأولى. مع التركيز على الجودة ورضا العملاء ، نعمل بجد لجعل رؤيتك حقيقة واقعة. نحن شركة ذات تفكير مستقبلي مكرسة لتقديم حلول مبتكرة للشركات في جميع أنحاء العالم. فريق الخبراء لدينا متحمس لمساعدة عملائنا على النجاح من خلال تقديم منتجات وخدمات من الدرجة الأولى. مع التركيز على الجودة ورضا العملاء ، نعمل بجد لجعل رؤيتك حقيقة واقعة ',
    par2: 'تأسست شركتنا في [العام] ، وقد نمت من شركة ناشئة صغيرة إلى شركة رائدة عالميا في [الصناعة]  نحن نفخر بأنفسنا لقيمنا القوية والتزامنا بالتميز وفهمنا العميق للتحديات التي يواجهها  عملاؤنا.',
    par3: 'سواء كنت تبحث عن حلول إبداعية أو خبرة فنية أو إرشادات استراتيجية ، فنحن هنا لمساعدتك. مهمتنا  هي تمكين الشركات بالأدوات والمعرفة التي تحتاجها للازدهار في عالم اليوم سريع الخطى.',
  },
}

// ✅ Create Vue I18n Instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'ar', // Default language
  fallbackLocale: 'en', // Fallback language
  messages,
})

export default i18n
