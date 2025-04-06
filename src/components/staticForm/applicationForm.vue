<template>
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
      <div class="br">
        <label class="label">رقم الحفظ:</label>
        <input type="number" class="input-small" id="input1" />

        <label class="label">لون الهوية:</label>
        <select class="input-small" id="input2">
          <option value="" disabled>-- اختر لون الهوية --</option>
          <option value="رصاصي">رصاصي</option>
          <option value="بنفسجي">بنفسجي</option>
          <option value="اخضر">اخضر</option>
          <option value="اصفر">اصفر</option>
          <option value="ازرق">ازرق</option>
        </select>
        <br />

        <label class="label">الاسم:</label>
        <input type="text" class="input-field" id="input3" />
        <br /><br />

        <label class="label">الجهة:</label>
        <input type="text" class="input-medium" id="input4" />
        <br /><br />

        <label
          class="border-text"
          style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px"
          >الحقول تملئ من قبل اللجنة الأمنية</label
        >
        <br /><br /><br />

        <div class="review-section">
          <span class="label" disabled>تاريخ طلب المعلومات:</span>
          <input type="text" class="input-small" id="input5" disabled />

          <span class="label" disabled>التسلسل:</span>
          <input type="text" class="input-small" id="input6" disabled />

          <span class="label" disabled>وقت المراجعة:</span>
          <input type="text" class="input-small" id="input7" disabled />
        </div>

        <div class="section-title" style="background-color: #f4b083; padding: 5px">
          حاسبة المعلومات
        </div>
        <br />

        <div class="decision-box">
          <div>
            <span class="highlight">القرار:</span>
          </div>
          <div>
            <span style="color: green; font-size: 20px">قبول</span>
            <input type="radio" name="decision" style="width: 16px; height: 16px" />
          </div>
          <div>
            <span style="color: red; font-size: 20px">رفض</span>
            <input type="radio" name="decision" style="width: 16px; height: 16px" />
          </div>
        </div>
        <br />

        <div class="input-container">
          <input type="text" disabled />
        </div>
        <div class="input-container">
          <input type="text" disabled />
        </div>
        <div class="input-container">
          <input type="text" disabled />
        </div>

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
      <label style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px">
        المعلومات الشخصية :</label
      >
      <div class="br">
        <label>الأسم الرباعي واللقب:</label>
        <input type="text" class="input-field2" />

        <div class="review-section2">
          <div class="d-flex flex-md-row align-items-start">
            <label>تاريخ الولادة:</label>
            <input type="date" class="input-small2" />

            <label>محل الولادة:</label>
            <input type="text" class="input-small2" />

            <label>الحالة االأجتماعية:</label>
            <input type="text" class="input-small2" />
          </div>
        </div>

        <br />
        <div class="d-flex flex-md-row align-items-start">
          <label>القومية:</label>
          <input type="text" class="input-medium2" oninput="checkInput(this)" />

          <label> الديانة:</label>
          <input type="text" class="input-medium2" oninput="checkInput(this)" />
        </div>

        <label style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px">
          محل السكن الحالي:</label
        >
        <br /><br />

        <div class="review-section2">
          <label>محلة:</label>
          <input type="text" class="input-4" oninput="checkInput(this)" />

          <label>زقاق:</label>
          <input type="text" class="input-4" oninput="checkInput(this)" />

          <label>دار:</label>
          <input type="text" class="input-4" oninput="checkInput(this)" />

          <label>مدة الاقامة:</label>
          <input type="text" class="input-4" oninput="checkInput(this)" />
        </div>

        <label>أقرب نقطة دالة:</label>
        <input type="text" class="input-medium2" oninput="checkInput(this)" />
        <div class="d-flex flex-md-row align-items-start">
          <label> نوع الملك:</label>
          <input type="text" class="input-medium2" oninput="checkInput(this)" />
        </div>
        <br /><br />

        <label style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px">
          محل السكن السابق:</label
        >
        <br /><br />

        <div class="review-section2">
          <label>محلة:</label>
          <input type="text" class="input-4" oninput="checkInput(this)" />

          <label>زقاق:</label>
          <input type="text" class="input-4" oninput="checkInput(this)" />

          <label>دار:</label>
          <input type="text" class="input-4" oninput="checkInput(this)" />

          <label>مدة الاقامة:</label>
          <input type="text" class="input-4" oninput="checkInput(this)" />
          <br />

          <label>أقرب نقطة دالة:</label>
          <input type="text" class="input-medium2" oninput="checkInput(this)" />
        </div>

        <br />
        <label>ارقام الهواتف:-1</label>
        <input type="number" class="input-medium2" />

        <label> 2-</label>
        <input type="number" class="input-medium2" />

        <br />
        <label>العمل الحالي:</label>
        <input type="text" class="input-medium2" />

        <label>مدة العمل:</label>
        <input type="text" class="input-medium2" />

        <br />
        <label>العمل السابق:</label>
        <input type="text" class="input-medium2" />

        <label>مدة العمل:</label>
        <input type="text" class="input-medium2" />
        <br />
        <label>التحصيل الدراسي:</label>
        <input type="text" class="input-medium2" />

        <label>سنة التخرج:</label>
        <input type="text" class="input-medium2" />
      </div>

      <div class="page-break"></div>

      <div class="br">
        <h4>1- هل يوجد لديك احتجاز او توقيف لدى اي جهة امنية عراقية سابق؟ اذكر التفاصيل</h4>
        <textarea></textarea>

        <h4>2- هل تم اتهامك سابقا او حاليا بأي شكوى قضائيا أو في طور التحقيق؟ اذكر التفاصيل</h4>
        <textarea></textarea>

        <h4>3- هل يوجد لديك حكم قضائي سابق؟ اذكر التفاصيل</h4>
        <textarea></textarea>

        <h4>4-هل تم اعتقالك او احتجازك من قبل اي قوة عسكرية احنافية بعد سقوط النظام عام 2003؟</h4>
        <textarea></textarea>

        <h4>5- هل عملت ضمن الكيانات االمنية والحزبية المنحلة قبل عام 2003؟ اذكر التفاصيل</h4>
        <textarea></textarea>

        <h4>6-هل لديك اقارب يعملون او يسكنون داخل المنطقة الخضراء؟ اذكر االسماء وجهة العمل</h4>
        <textarea></textarea>

        <h4>7-هل اجريت مقابلة ذات طابع امني لدى اي جهة اخرى ؟ اذكر التفاصيل</h4>
        <textarea></textarea>
      </div>

      <div class="page-break"></div>
      <div class="br">
        <h4>8- هل سافرت خارج العراق؟</h4>
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
        <label>العمل الحالي للأب:</label>
        <input type="text" class="input-4" />

        <label>العمل السابق للأب:</label>
        <input type="text" class="input-4" />
        <br />

        <label>اسم الأم:</label>
        <input type="text" class="input-4" />

        <label>المهنة:</label>
        <input type="text" class="input-4" />
        <br />

        <label>أسم الزوجة أو الزوج:</label>
        <input type="text" class="input-4" />

        <label>المهنة:</label>
        <input type="text" class="input-4" />

        <br />
        <h4>9- اسماء الأبناء البالغين؟</h4>
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
        <h4>10-اسماء االاخوة البالغين (يتم ذكر االاشقاء والغير اشقاء بما فيهم المتوفين)</h4>
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
        <h4>11 - هل يوجد لدى افراد العائلة احتجاز او توقيف لدى جهة امنية عراقية سابقة او حاليا</h4>
        <textarea></textarea>
        <br />
        <h4>
          12 - هل تم اتهام احد افراد العائلة سابقاً او حالياً بأي شكوى قضائيا او في طور التحقيق؟
          اذكر التفاصيل
        </h4>
        <textarea></textarea>

        <br />
        <h4>13 - هل يوجد لدى احد افراد العائلة حكم قضائي سابق او حالي؟اذكر التفاصيل</h4>
        <textarea></textarea>

        <br />
        <h4>
          14- هل تم اعتقال احد افراد العائلة او احتجازه من قبل اي قوة عسكرية اجنبية بعد سقوط النظام
          عام 2003؟ اذكر التفاصيل
        </h4>
        <textarea></textarea>

        <br />
        <h4>
          15 -هل عمل احد افراد العائلة ضمن الكيانات الامنية والحزبية المنحلة قبل عام 2003؟ اذكر
          التفاصيل
        </h4>
        <textarea></textarea>
      </div>

      <div class="br">
        <label
          class="border-text"
          style="border-bottom: #000 3px solid; padding-bottom: 8px; font-size: 20px"
          >معلومات الأقارب (الأعمام و الاخوال وأبناءهم)</label
        >
        <br /><br /><br />

        <h4>16 -هل تسلم احد الاقارب مناصب حزبية او امنية مهمة قبل عام 2003؟ اذكر التفاصيل</h4>
        <textarea></textarea>

        <br />
        <h4>17 -هل يوجد محكومية او مطلوبية بحق احد االقارب بتهمة الارهاب؟ اذكر التفاصيل</h4>
        <textarea></textarea>

        <br />
        <h4>18- هل تعرضت انت او احد افراد عائلتك او اقاربك الى عمل ارهابي؟</h4>
        <textarea></textarea>
      </div>

      <div class="br">
        <label
          class="border-text"
          style="
            border-bottom: #000 3px solid;
            padding-bottom: 8px;
            font-size: 20px;
            margin-right: 46%;
          "
          >تعهد خطي</label
        >

        <h4 style="width: 100%">
          انا الموقع ادناه اتعهد بصحة المعلومات المقدمة في الاستمارة الامنية وبخلافه اتحمل كافة
          التبعات القانونية والامنية بما فيها الرفض الامني او سحب الهوية الممنوحة بغض النظر عن طبيعة
          العمل داخل المنطقة الخضراء او اسباب منح الموافقة على اصدار الهوية. ولاجله وقعت
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
  <button type="button" @click="generatePDF">طباعة</button>
</template>

<script setup>
import html2pdf from 'html2pdf.js'
import { ref } from 'vue'

const printContent = ref(null)

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

  // Generate the PDF and get a blob URL
  const worker = html2pdf().from(element).set(opt)

  // Wait for the PDF to be built and get the Blob URL
  const pdfBlobUrl = await worker.outputPdf('bloburl')

  // Open in a new tab
  window.open(pdfBlobUrl, '_blank')
}
</script>

<style scoped>
@page {
  margin: 20px 20px 40px; /* Extra bottom margin for page number */
  size: A4;

  @bottom-center {
    content: counter(pages) '-' counter(page);
    font-size: 20px;
    font-family: 'freeserif', sans-serif;
  }
}

body {
  font-family: 'freeserif', sans-serif;
  direction: rtl;
  text-align: right;
  padding: 20px;
  font-size: 18px;
  margin: 0;
  box-sizing: border-box;
  counter-reset: page;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  position: relative;
  border-bottom: 3px solid black;
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
  border: #000 3px solid;
}

thead {
  background-color: rgb(244, 176, 131);
}
tr {
  border: #000 3px solid;
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
  border: 2px solid black;
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
  border-bottom: 2px solid #000;
}

.input-4 {
  width: 13%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 18px;
  padding-top: 1%;
  border: none;
  border-bottom: 2px solid #000;
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
  border: 2px solid black;
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
  border-bottom: 2px solid #000;
}

.input-field {
  width: 75%;
  margin-bottom: 10px;
  padding: 8px;
  border: 2px solid black;
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
  border-bottom: 2px solid #000;
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
  content: counter(input-counter) '.'; /* Use the counter value */
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
}
</style>
