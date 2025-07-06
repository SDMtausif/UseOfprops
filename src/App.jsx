import React from 'react'
import PropertyFile from './PropertyFile'
const App = () => {
  return (
   <>
   <PropertyFile name="Memey" age={30} isStudent={false} />
   <PropertyFile name="Koharu" age={23} isStudent={true} />
   <PropertyFile name="KonaN ssan" age={45} isStudent={false} />
   </>
  )
}

export default App
