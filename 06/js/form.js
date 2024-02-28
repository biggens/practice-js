let elForm, elSelectPackage, elPackageHint, elTerms;

elForm = document.getElementById('formSignup');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function checkTerms(event) {
    if(!elTerms.checked) {
        elTermsHint.innerHTML = 'Вы должны согласиться с условиями соглашения.';
        event.preventDefault();
    }
}

elForm.addEventListener('submit', checkTerms, false);


elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');

function packageHint() {
    let package = this.options[this.selectedIndex].value;
    if(package == 'monthly') {
        elPackageHint.innerHTML = 'Сэкономьте 100 р, оплатив подписку на год!';
    } else {
        elPackageHint.innerHTML = 'Прекрасный выбор!';
    }
}

elSelectPackage.addEventListener('change', packageHint, false);