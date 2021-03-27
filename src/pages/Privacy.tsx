import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    maxWidth: '600px',
    padding: '100px 1rem'
  },
  title: {
    margin: '3rem 2rem',
    textAlign: 'center',
  },
  box: {
    marginBottom: '1.7rem',
  },
  text: {
    fontWeight: 600,
    marginBottom: '7px',
  },
  list: {
    listStyle: 'lower-latin',
    marginLeft: '2rem',
  }
})

const Privacy: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h3' className={classes.title}>
        プライバシーポリシー
      </Typography>
      <div>
        <div className={classes.box}>
          <Typography variant='h5' className={classes.text}>
            ご登録いただいた情報について
          </Typography>
          <Typography variant='subtitle1'>
            個人情報漏えい防止のため、当社の個人情報保護方針に従い適正に管理しております。
          </Typography>
        </div>
        <div className={classes.box}>
          <Typography variant='h5' className={classes.text}>
            収集目的
          </Typography>
          <Typography variant='subtitle1'>
          弊社では、弊社サービスへのお問い合わせ・お申込みに際し、必要な範囲内で個人情報の提供をお願いしております。<br />ご提供いただいた個人情報は、弊社「個人情報保護方針」に定めた目的以外には利用いたしません。
          </Typography>
        </div>
        <div className={classes.box}>
          <Typography variant='h5' className={classes.text}>
            第三者への提供
          </Typography>
          <Typography variant='subtitle1'>
            弊社では、お問い合わせ・お申込みいただいた方の同意なく、個人情報を第三者に提供することはございません。<br />ただし、次の場合には、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供することがありますので、あらかじめご了承ください。
          </Typography>
            <ol className={classes.list}>
              <li>法令に基づく場合</li>
              <li>人の生命、身体又は財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難である場合</li>
              <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難である場合</li>
              <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
            </ol>
        </div>
        <div className={classes.box}>
          <Typography variant='h5' className={classes.text}>
            個人情報に関するお問い合わせ
          </Typography>
          <Typography variant='body1'>
            お問い合わせいただいた方の個人情報について、ご本人から開示・訂正・削除を求められたときは、ご本人確認の上、弊社にて速やかに対応いたします。<br />個人情報に関するお問い合わせ・ご相談は下記にてお受けいたします。
          </Typography>
          <div className='module-spacer--extra-small'></div>
          <Typography variant='subtitle2'>hbk14320@gmail.com</Typography>
        </div>
      </div>
    </div>
  )
}

export default Privacy
