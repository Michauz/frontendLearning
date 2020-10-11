//take the first 10 words and add three tods at the end of the new string
oldString = "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט\n" +
    "לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק\n" +
    "מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק?\n" +
    "לתיג ישבעס.\n" +
    "קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קוואזי במר\n" +
    "מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי\n" +
    "בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו\n" +
    "בלוקריה שיצמה ברורק"
oldString = oldString.split(" ");
newString = "";
for (i=0;i<10;i++){
    newString = newString.concat(oldString[i]);
    newString = newString.concat(" ");
}
newString = newString.concat("...");
console.log(newString);