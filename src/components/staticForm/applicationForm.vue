<template>
  <form @submit.prevent="generatePDF">
    <div ref="printContent">
      <div class="background-logo">
        <img src="../../assets/PMO.png" alt="PMO logo" />
      </div>
      <div class="header">
        <img src="../../assets/PMO.png" class="POMi" alt="PMO Logo" />
        <img src="../../assets/PMOi.png" class="POM" alt="PMOi Logo" />
        <div class="text-section">
          <h2 style="text-align: center">Prime Minister Office</h2>
          <h2 style="text-align: center">Green Zone Badging Office</h2>
          <h2 style="text-align: center">Security Committee</h2>
        </div>
      </div>

      <div class="main-content">
        <div>
          <div class="d-flex justify-content-between">
            <div class="w-75">
              <label class="label">رقم الحفظ:</label>
              <input type="number" class="input-small" id="input1" v-model="saveNumber" />

              <label class="label">لون الهوية:</label>
              <select class="input-small1" id="input2">
                <option value="" disabled>-- اختر لون الهوية --</option>
                <option value="رصاصي">رصاصي</option>
                <option value="بنفسجي">بنفسجي</option>
                <option value="اخضر">اخضر</option>
                <option value="اصفر">اصفر</option>
                <option value="ازرق">ازرق</option>
              </select>
              <br />

              <label class="label">الاسم:</label>
              <input type="text" class="input-field" id="input3" v-model="name" required />
              <br />
              <label class="label">الجهة:</label>
              <input type="text" class="input-field" id="input4" required />
              <br />
            </div>

            <div class="flex-column">
              <div class="image-holder text-center">هنا الصورة الشخصية</div>
              <div id="qr-container">
                <canvas ref="qrCanvas"></canvas>
              </div>
            </div>
          </div>

          <div class="w-100 d-flex justify-content-center align-items-center">
            <label
              class="border-text"
              style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px"
              >الحقول تملئ من قبل اللجنة الأمنية</label
            >
          </div>

          <br />

          <div class="review-section">
            <span class="label" disabled>تاريخ طلب المعلومات:</span>
            <input type="text" class="input-small" id="input5" disabled />

            <span class="label" disabled>التسلسل:</span>
            <input type="text" class="input-small" id="input6" disabled />

            <span class="label" disabled>وقت المراجعة:</span>
            <input type="text" class="input-small" id="input7" disabled />
          </div>
          <div class="d-flex justify-content-center">
            <table class="info-table">
              <thead>
                <tr>
                  <th colspan="2">حاسبة المعلومات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2" style="height: 100px"></td>
                  <!-- Empty cell, same as your image -->
                </tr>
              </tbody>
            </table>
          </div>

          <div class="decision-box">
            <div>
              <span class="highlight">القرار:</span>
            </div>
            <div>
              <span style="color: green; font-size: 20px">اطلاق</span>
              <input type="radio" name="decision" style="width: 16px; height: 16px" />
            </div>
            <div>
              <span style="color: red; font-size: 20px">رفض</span>
              <input type="radio" name="decision" style="width: 16px; height: 16px" />
            </div>
          </div>

          <div class="input-container">1.<input type="text" disabled /></div>
          <div class="input-container">2.<input type="text" disabled /></div>
          <div class="input-container">3.<input type="text" disabled /></div>

          <div class="committee">
            <span>عضو اللجنة الأمنية</span>
            <span>عضو اللجنة الأمنية</span>
            <span>عضو اللجنة الأمنية</span>
          </div>

          <div class="committee">
            <span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;202</span>
            <span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;202</span>
            <span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;202</span>
          </div>
        </div>

        <div class="page-break"></div>

        <div class="d-flex w-100 justify-content-center alighn-items-center">
          <label style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px">
            المعلومات الشخصية
          </label>
        </div>

        <div class="br">
          <label class="label-style">الأسم الرباعي واللقب:</label>
          <input type="text" class="input-field2" required />

          <div class="review-section2">
            <div class="d-flex flex-md-row align-items-start">
              <label class="label-style">تاريخ الولادة:</label>
              <input type="date" class="input-small2" required />

              <label class="label-style">محل الولادة:</label>
              <input type="text" class="input-small2" required />

              <label class="label-style">الحالة االأجتماعية:</label>
              <input type="text" class="input-small2" required />
            </div>
          </div>

          <br />
          <div class="d-flex flex-md-row align-items-start">
            <label class="label-style">القومية:</label>
            <input type="text" class="input-medium2" required />

            <label class="label-style"> الديانة:</label>
            <input type="text" class="input-medium2" required />
          </div>

          <label style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px">
            محل السكن الحالي:</label
          >
          <br /><br />

          <div class="review-section2">
            <label class="label-style">محلة:</label>
            <input type="text" class="input-4" required />

            <label class="label-style">زقاق:</label>
            <input type="text" class="input-4" required />

            <label class="label-style">دار:</label>
            <input type="text" class="input-4" required />

            <label class="label-style">مدة الاقامة:</label>
            <input type="text" class="input-4" required />
          </div>

          <label class="label-style">أقرب نقطة دالة:</label>
          <input type="text" class="input-medium2" required />
          <div class="d-flex flex-md-row align-items-start">
            <label class="label-style"> نوع الملك:</label>
            <input type="text" class="input-medium2" required />
          </div>
          <br /><br />

          <label style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px">
            محل السكن السابق:</label
          >
          <br /><br />

          <div class="review-section2">
            <label class="label-style">محلة:</label>
            <input type="text" class="input-4" required />

            <label class="label-style">زقاق:</label>
            <input type="text" class="input-4" required />

            <label class="label-style">دار:</label>
            <input type="text" class="input-4" required />

            <label class="label-style">مدة الاقامة:</label>
            <input type="text" class="input-4" required />
            <br />

            <label class="label-style">أقرب نقطة دالة:</label>
            <input type="text" class="input-medium2" required />
          </div>

          <br />
          <label class="label-style">ارقام الهواتف:-1</label>
          <input type="number" class="input-medium2" required />

          <label class="label-style"> 2-</label>
          <input type="number" class="input-medium2" />

          <br />
          <label class="label-style">العمل الحالي:</label>
          <input type="text" class="input-medium2" required />

          <label class="label-style">مدة العمل:</label>
          <input type="text" class="input-medium2" required />

          <br />
          <label class="label-style">العمل السابق:</label>
          <input type="text" class="input-medium2" />

          <label class="label-style">مدة العمل:</label>
          <input type="text" class="input-medium2" />
          <br />
          <label class="label-style">التحصيل الدراسي:</label>
          <input type="text" class="input-medium2" required />

          <label class="label-style">سنة التخرج:</label>
          <input type="text" class="input-medium2" required />
        </div>

        <div class="page-break"></div>

        <div class="br">
          <h5>1- هل يوجد لديك احتجاز او توقيف لدى اي جهة امنية عراقية سابقاً؟ اذكر التفاصيل</h5>
          <textarea></textarea>

          <h5>2- هل تم اتهامك سابقا او حاليا بأي شكوى قضائيا أو في طور التحقيق؟ اذكر التفاصيل</h5>
          <textarea></textarea>

          <h5>3- هل يوجد لديك حكم قضائي سابق؟ اذكر التفاصيل</h5>
          <textarea></textarea>

          <h5>
            4- هل تم اعتقالك او احتجازك من قبل اي قوة عسكرية اجنبية بعد سقوط النظام عام 2003؟ اذكر
            التفاصيل
          </h5>
          <textarea></textarea>

          <h5>5- هل عملت ضمن الكيانات الامنية والحزبية المنحلة قبل عام 2003؟ اذكر التفاصيل</h5>
          <textarea></textarea>

          <h5>6-هل لديك اقارب يعملون او يسكنون داخل المنطقة الخضراء؟ اذكر الاسماء وجهة العمل</h5>
          <textarea></textarea>

          <h5>7-هل اجريت مقابلة ذات طابع امني لدى اي جهة اخرى ؟ اذكر التفاصيل</h5>
          <textarea></textarea>
        </div>

        <div class="page-break"></div>
        <div class="br">
          <h5>8- هل سافرت خارج العراق؟</h5>
          <table border="1">
            <thead style="background-color: rgb(244, 176, 131)">
              <tr>
                <th>اسم الدولة</th>
                <th>مدة الإقامة</th>
                <th>عدد السفرات</th>
                <th>التاريخ</th>
                <th>الغرض من السفر</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
            </tbody>
          </table>

          <br />
          <div class="d-flex w-100 justify-content-center alighn-items-center">
            <label style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px"
              >معلومات العائلة</label
            >
          </div>
          <label class="label-style">العمل الحالي للأب:</label>
          <input type="text" class="input-4" />

          <label class="label-style">العمل السابق للأب:</label>
          <input type="text" class="input-4" />
          <br />

          <label class="label-style">اسم الأم:</label>
          <input type="text" class="input-4" />

          <label class="label-style">المهنة:</label>
          <input type="text" class="input-4" />
          <br />

          <label class="label-style">أسم الزوجة أو الزوج:</label>
          <input type="text" class="input-4" />

          <label class="label-style">المهنة:</label>
          <input type="text" class="input-4" />

          <br />
          <h5>9- اسماء الأبناء البالغين؟</h5>
          <table border="1">
            <thead style="background-color: rgb(244, 176, 131)">
              <tr>
                <th>الأسم</th>
                <th>المواليد</th>
                <th>المهنة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="br">
          <h5>10-اسماء االاخوة البالغين (يتم ذكر االاشقاء والغير اشقاء بما فيهم المتوفين)</h5>
          <table border="1">
            <thead style="background-color: rgb(244, 176, 131)">
              <tr>
                <th>الأسم</th>
                <th>المواليد</th>
                <th>المهنة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
              <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
              </tr>
            </tbody>
          </table>
          <div class="page-break"></div>
          <br />
          <h5>
            11 - هل يوجد لدى افراد العائلة احتجاز او توقيف لدى جهة امنية عراقية سابقة او حاليا
          </h5>
          <textarea></textarea>
          <br />
          <h5>
            12 - هل تم اتهام احد افراد العائلة سابقاً او حالياً بأي شكوى قضائيا او في طور التحقيق؟
            اذكر التفاصيل
          </h5>
          <textarea></textarea>

          <br />
          <h5>13 - هل يوجد لدى احد افراد العائلة حكم قضائي سابق او حالي؟اذكر التفاصيل</h5>
          <textarea></textarea>

          <br />
          <h5>
            14- هل تم اعتقال احد افراد العائلة او احتجازه من قبل اي قوة عسكرية اجنبية بعد سقوط
            النظام عام 2003؟ اذكر التفاصيل
          </h5>
          <textarea></textarea>

          <br />
          <h5>
            15 -هل عمل احد افراد العائلة ضمن الكيانات الامنية والحزبية المنحلة قبل عام 2003؟ اذكر
            التفاصيل
          </h5>
          <textarea></textarea>
        </div>

        <div class="br">
          <div class="d-flex w-100 justify-content-center align-items-center">
            <label
              class="border-text"
              style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px"
              >معلومات الأقارب (الأعمام و الاخوال وابنائهم)</label
            >
          </div>
          <br />

          <h5>16 -هل تسلم احد الاقارب مناصب حزبية او امنية مهمة قبل عام 2003؟ اذكر التفاصيل</h5>
          <textarea></textarea>

          <h5>17 -هل يوجد محكومية او مطلوبية بحق احد الاقارب بتهمة الارهاب؟ اذكر التفاصيل</h5>
          <textarea></textarea>

          <br />
          <h5>18- هل تعرضت انت او احد افراد عائلتك او اقاربك الى عمل ارهابي؟ اذكر التفاصيل</h5>
          <textarea></textarea>
        </div>
        <div class="d-flex w-100 justify-content-center align-items-center">
          <label style="border-bottom: #000 3px #ccc; padding-bottom: 8px; font-size: 20px"
            >رفق نسخة واضحه وملونة من المستمسكات الثبوتية</label
          >
        </div>

        <div class="page-break"></div>

        <div class="br">
          <label
            class="border-text"
            style="
              border-bottom: #000 3px #ccc;
              padding-bottom: 8px;
              font-size: 20px;
              margin-right: 46%;
            "
            >تعهد خطي</label
          >

          <h4 style="width: 100%">
            انا الموقع ادناه اتعهد بصحة المعلومات المقدمة في الاستمارة الامنية وبخلافه اتحمل كافة
            التبعات القانونية والامنية بما فيها الرفض الامني او سحب الهوية الممنوحة بغض النظر عن
            طبيعة العمل داخل المنطقة الخضراء او اسباب منح الموافقة على اصدار الهوية. ولاجله وقعت
          </h4>

          <br /><br />
          <label>التوقيع:</label>
          <br /><br />
          <label>الأسم:</label>
          <br /><br />
          <label>التاريخ:</label>
          <br /><br />
          <label style="margin-right: 66%">بصمة الابهام الايسر:</label>
        </div>
      </div>
    </div>
    <button type="submit">طباعة</button>
  </form>
</template>

<script setup>
import html2pdf from 'html2pdf.js'
import { ref, onMounted, watchEffect } from 'vue'
import QRCode from 'qrcode'
import { useRouter } from 'vue-router'

// Router instance
const router = useRouter()

// Refs
const printContent = ref(null)
const qrCanvas = ref(null)
const saveNumber = ref('')
const name = ref('')
const qrValue = ref('')

// ✅ Render QR Code function
const renderQR = () => {
  if (!qrCanvas.value || !saveNumber.value || !name.value) return
  qrValue.value = `https://gzo.ur.gov.iq/qr-result?saveNumber=${saveNumber.value}&name=${encodeURIComponent(name.value)}`

  QRCode.toCanvas(qrCanvas.value, qrValue.value, { width: 120 }, (error) => {
    if (error) console.error('QR render error:', error)
  })
}

// ✅ Automatically update QR when data changes
watchEffect(renderQR)

// ✅ Initial render if needed
onMounted(() => {
  renderQR()
})

// ✅ PDF Generator
const generatePDF = async () => {
  const element = printContent.value
  if (!element) return

  const opt = {
    margin: 10,
    filename: 'security-form.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  }

  const worker = html2pdf().from(element).set(opt)
  const pdfBlobUrl = await worker.outputPdf('bloburl')
  window.open(pdfBlobUrl, '_blank')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Changa:wght@200..800&display=swap');

@page {
  margin: 20px 20px 40px; /* Extra bottom margin for page number */
  size: A4;

  @bottom-center {
    content: counter(pages) '-' counter(page);
    font-size: 20px;
    font-family: 'freeserif', sans-serif;
  }
}

@font-face {
  font-family: 'Changa';
  src: url('@/assets/fonts/Changa-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Changa', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  direction: rtl;
  text-align: right;
  padding: 20px;
  font-size: 18px;
  margin: 0;
  box-sizing: border-box;
  counter-reset: page;
}

.image-holder {
  width: 110px;
  height: 100px;
  border: solid 3px #ccc;
  float: left;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  position: relative;
  border-bottom: 3px solid #ccc;
  padding-bottom: 43px;

  width: 100%;
}
.POM {
  width: 200px;
  height: auto;
}
.POMi {
  width: 150px;
  height: auto;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: -12px;
}

table {
  width: 81%;
  border-collapse: collapse;
  text-align: center;
  border: #ccc 3px solid;
}

thead {
  background-color: rgb(244, 176, 131);
}
tr {
  border: #ccc 3px solid;
}
.text-section {
  text-align: right;
}
.text-section h1,
.text-section h2 {
  margin: 5px 0;
  font-size: 22px;
}

.section-title {
  text-align: center;
  font-weight: bold;
  margin: 20px 0;
  font-size: 20px;
  border: 3px solid #ccc;
  height: 12rem;
}

.review-section {
  display: flex;
  margin-bottom: 10px;
  margin-left: 1%;
}

.review-section2 {
  padding: 1%;
}
.decision-box {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.decision-box div {
  text-align: center;
}
.highlight {
  background-color: yellow;
  font-weight: bold;
  font-size: 22px;
}
.committee {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.signature {
  text-align: center;
  margin-top: 10px;
}
.label-style {
  font-size: 20px;
}
.label {
  margin: 10px;
  font-size: 20px;
}
.label2 {
  margin: 1px;
  font-size: 20px;
}
.input-small {
  width: 30%;
  margin-bottom: 10px;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 18px;
  padding-top: 1%;
}

.input-small1 {
  width: 16%;
  margin-bottom: 10px;
  padding: 4px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 18px;
  padding-top: 1%;
}

.input-small2 {
  width: 30%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 18px;
  padding-top: 1%;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-top: 25px; /* Adjust as needed */
}

.input-4 {
  width: 13%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 18px;
  padding-top: 1%;
  border: none;
  border-bottom: 2px solid #ccc;
}

.input-small:disabled {
  background-color: #f1f1f1; /* Light gray background */
  color: #888; /* Gray text color */
  cursor: not-allowed; /* Show "not allowed" cursor */
  border-color: #ccc; /* Lighten the border color */
}

.input-medium {
  width: 40%;
  margin-bottom: 10px;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 18px;
  padding-top: 1%;
}

.input-medium2 {
  width: 30%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 18px;
  padding-top: 1%;
  border: none;
  border-bottom: 2px solid #ccc;
}

.input-field {
  width: 75%;
  margin-bottom: 10px;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 18px;
  padding-top: 1%;
}

.input-field2 {
  width: 75%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 18px;
  padding-top: 1%;
  border: none;
  border-bottom: 2px solid #ccc;
}

.page-break {
  page-break-before: always;
  counter-increment: page;
}
.footer {
  text-align: center;
  margin-top: 10px;
}

.input-container {
  position: relative;
  display: flex;
  justify-content: flex-start; /* Align content to the right */
  margin-bottom: 10px;
  direction: rtl; /* Ensure the entire container follows RTL */
  counter-increment: input-counter; /* Increment the counter for each input-container */
}

.input-container:first-of-type {
  counter-reset: input-counter; /* Reset the counter at the first element */
}

.input-container::before {
  font-weight: bold;
  margin-left: 10px; /* Space between number and input */
}

.input-container input {
  border: none;
  border-bottom: 2px dotted #000;
  outline: none;
  padding: 8px;
  width: 90%;
  text-align: right; /* Ensure text inside input is also right-aligned */
}

.no-border {
  border: none !important;
}

.content-wrapper {
  position: relative;
  z-index: 1;
}

.background-logo {
  position: fixed; /* Fixed position for printing */
  width: 50%; /* Adjust the size as needed */
  height: 50%;
  top: 60%;
  right: 15%;
  transform: translate(-50%, -50%);
  opacity: 0.06;
  z-index: -1; /* Ensure it stays behind content */
}
input {
  background-color: transparent !important;
}

textarea {
  background-color: transparent !important;
  width: 80%;

  padding: 8px;
}

button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #319cb5;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #03181f;
}
@media (max-width: 768px) {
  .image-holder {
    position: relative;
    top: -8px;
    margin-bottom: 8px;
    float: left;
    min-width: 80px;
    min-height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 10px; /* Optional: reduce text size */
    background-color: #f9f9f9; /* Optional: makes box visible before image loads */
  }

  .main-content {
    padding: 5px;
  }
  .POM {
    width: 120px;
  }
  .POMi {
    width: 120px;
  }
  .text-section h2 {
    font-size: 10px;
  }
  .background-logo {
    position: fixed; /* Keep logo fixed */
    top: 60%; /* Adjust as needed */
    right: -25%;
    left: 10%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
    z-index: -1; /* Ensure it stays behind content */
  }
  .br {
    margin-top: 24%;
  }
  #qr-container {
    display: right;
    width: 80px !important;
  }
}
</style>
