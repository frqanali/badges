import { createI18n } from 'vue-i18n'

// ✅ Define translations
const messages = {
  en: {
    services: 'services',
    news: 'news',
    search: 'search',
    whoWeAre: 'who we are',
    instructions: 'regulations and instructions ',
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

    par1: 'The Green Zone Identity Office is an entity affiliated to the Prime Ministers Office which is responsible for issuing and renewing IDs for entering the Green Zone in accordance with the approved controls and instructions.',
    par2: 'The office is responsible for organizing the granting of identities to employees and workers, as well as to residents residing within the region, as well as companies operating within it. The office adopts a precise system that includes five categories of identities, each of which defines specific powers, in order to ensure that the process of entering the Green Zone is organized according to the highest standards of security and discipline.',

    ndc: 'General Secretariat of the Council of Ministers / National Data Center ©2025',
    phoneNumber: 'Phone Number',
    email: 'E-mail',
    address: 'Address: karrada inside',
    location: 'Location: ',
    clickhere: ' click here  ',
    contactUs: ' Contact Us  ',
    write: ' Write Here ',
    send: ' Send ',
  },
  ar: {
    services: 'الخدمات',
    news: 'الاخبار',
    search: 'بحث',
    whoWeAre: 'من نحن',
    instructions: 'الضوابط والتعليمات',
    info: 'هذه بطاقة أطول مع نص داعم أدناه كمقدمة طبيعية للإضافة محتوى. هذا المحتوى أطول قليلا',
    go: 'انتقل الى الخدمة',
    servicename: 'اسم الخدمة',
    newstitle: ' عنوان الخبر',
    more: 'المزيد',
    newsinfo: ' هذا وصف موجز للمقال الإخباري. يمنح القراء معاينة ل تَمْثِيلِيَّة.',
    links: 'الروابط',
    site: 'الموقع الالكتروني',
    gzoffice: 'مكتب هويات المنطقة الخضراء ',
    par1: 'مكتب هويات المنطقة الخضراء هو جهة تابعة لمكتب رئيس مجلس الوزراء، يتولى مسؤولية إصدار وتجديد الهويات الخاصة بالدخول إلى المنطقة الخضراء وفقًا للضوابط والتعليمات المعتمدة.',
    par2: 'يختص المكتب بتنظيم منح الهويات للموظفين والعاملين، وكذلك للسكان المقيمين داخل المنطقة، بالإضافة إلى الشركات العاملة ضمنها. ويعتمد المكتب نظامًا دقيقًا يشمل خمس فئات من الهويات، تحدد كل منها صلاحيات محددة، بهدف ضمان تنظيم عملية الدخول إلى المنطقة الخضراء وفق أعلى معايير الأمن والانضباط.',
    ndc: '©2025 الأمانة العامة لمجلس الوزراء / مركز البيانات الوطني',
    phoneNumber: 'رقم الهاتف ',
    email: 'البريد الالكتروني',
    address: ' العنوان: الكرادة داخل',
    location: ' الموقع:  ',
    clickhere: ' اضغط هنا ',
    contactUs: ' تواصل معنا  ',
    write: ' اكتب هنا  ',
    send: ' ارسال ',
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
