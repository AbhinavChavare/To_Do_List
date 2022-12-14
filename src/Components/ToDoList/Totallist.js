import React, { useState } from 'react'
import "./Totallist.css"
import { useListContext } from '../Context/ListContext';
import { ToastContainer} from 'react-toastify';

const Totallist = () => {     

    const { storeDatacreated, getListTitle, storeListData, title, description, deletedList } = useListContext()

    return (
        <div className='tolist-center'>
            <div className='totlist-cont'>
                <div className='first-cont'>
                    {
                        storeListData ?
                            storeListData.map((curelem, ind) => {
                                return <h5 key={curelem.id} 
                                ><strong>  {ind + 1}: {curelem.title}</strong> </h5>
                            }) : null

                    }

                </div>
                <div className='sec-cont'>
                    <div className='inputlist'>
                        <div className='totallistcont'>
                            <div className='title-data'>
                                <h5 className='flex-center'>Title</h5>
                                <input className='descrip-cont' value={title} type="text" placeholder='Enter list title' name="title" onChange={(e) => getListTitle(e)} />
                            </div>
                            <div className='title-data'>
                                <h5 className='flex-center '>Description</h5>
                                <textarea type="text" rows="5" name="description" value={description} placeholder='please describe...' className='descrip-cont' onChange={(e) => getListTitle(e)} />

                            </div>
                            <button className='btn-text' onClick={() => storeDatacreated()} >Create list</button>



                        </div>

                    </div>

                    <div className='created-list-cont'>
                        {
                            (storeListData) ?
                                storeListData.map((curelem) => {
                                    return (
                                        <div key={curelem.id} className='totallistcont list-col'>
                                            <div className='tit-text'>
                                                {curelem.title}
                                            </div>
                                            <div className='des-text'>
                                                {curelem.description}
                                            </div>
                                            <button className='btn-text' onClick={() => deletedList(curelem.id)} >Delet List</button>

                                        </div>
                                    )
                                })
                                : null
                        }
                    </div>


                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Totallist
