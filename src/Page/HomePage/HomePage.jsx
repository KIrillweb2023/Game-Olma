import { MyShopDownPanel } from '../../components/MyShopDownPanel/MyShopDownPanel'
import { Paytime } from '../../components/Paytime/Paytime'
import { MyShop } from '../../components/MyShop/MyShop'
import { MyShopUpgrade } from '../../components/MyShopUpgrade/MyShopUpgrade'


export const HomePage = () => {
    return (
        <>
            <Paytime/>
            <MyShop/>
            <MyShopUpgrade/>
            <MyShopDownPanel/>
        </>
    )
}