import React from 'react';
import './footer.css'

function Footer(){
        return(
                <footer className='footer'>
                <div className='footer-container'>
                    <div className='footer-item'>
                        <h3>VỀ Dế Garden</h3>
                        <hr></hr>
                        <p>Với tình yêu với cây cảnh. Dế Garden sẽ đem đến bạn những sản phẩm về cây cảnh góp phần phủ xanh cho không gian của bạn</p>
                    </div>
                    <div className='footer-item mid'>
                        <h3>FANPAGE</h3>
                        <hr></hr>
                        <div className='social-media'>
                            <div className='facebook'>
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>fb.com/DeGarden.PlantWorkshop
                            </div>
                            <div className='instagram'>
                                <i class="fa fa-instagram" aria-hidden="true"></i>vuoncuade
                            </div>
                        </div>
                    </div>
                    <div className='footer-item'>
                        <h3>THÔNG TIN LIÊN HỆ</h3>
                        <hr></hr>
                        <div className='info'>
                            <div className='address'>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>53/104 Trần Khánh Dư, P.Tân Định, Q.1
                            </div>
                            <div className='phone'>
                                <i class="fa fa-phone" aria-hidden="true"></i>091 999 51 47
                            </div>
                            <div className='mail'>
                                <i class="fa fa-envelope" aria-hidden="true"></i>vuoncuade@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </footer>    
        )
}

export default Footer