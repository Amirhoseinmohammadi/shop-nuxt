<template>
    <div class=" bg-[#494a4a]" >
        <div class="sticky top-0 z-10 shadow-2xl ">
            <AppMenu />
        </div>
        <div >
            <slot/>
        </div>
        
        <div>
            <FooterView/>
        </div>
    </div>
</template>


