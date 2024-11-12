import { useTranslation } from 'react-i18next'

const languages = [
    {code : 'en', lang: 'English'},
    {code : 'fr', lang: 'French'},
    {code : 'hi', lang: 'Hindi'},
    {code : 'de', lang: 'German'},
    {code : 'ar', lang: 'Arabic'}
]

const LanguageSelector = () => {

    const {i18n} = useTranslation()

    const changeLanguage = (code) => {
        i18n.changeLanguage(code)
    }

  return (
    <div className='btn-container'>
        {
            languages.map((currlang) => {
                return (
                    <button className={currlang.code === i18n.language ? 'active' : ''} key={currlang.code} onClick={() => changeLanguage(currlang.code)}>{currlang.lang}</button>
                )
            })
        }
    </div>
  )
}

export default LanguageSelector