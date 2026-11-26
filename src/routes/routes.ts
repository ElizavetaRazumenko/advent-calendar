import { createElement } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from 'src/constants/routes.ts'
import { GiftPage } from 'src/pages/gift-page/GiftPage.tsx'
import { MainPage } from 'src/pages/main-page/MainPage.tsx'

export const router = createBrowserRouter([
  {
    path: ROUTES.main,
    element: createElement(MainPage),
  },
  {
    path: ROUTES.gift,
    element: createElement(GiftPage),
  },
])
