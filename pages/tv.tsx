import React, { FC } from 'react';
import DefaultLayout from 'comp/Layout'; 
import { useStore } from 'store'; 
const TVView: FC<{}>= ()=> {
	const gnbVm = useStore('gnb')?.data;
	
	return (
		<> 
			<DefaultLayout gnbVm={gnbVm}>
				This is TV 
			</DefaultLayout>
		</>
	)
}

export default TVView; 