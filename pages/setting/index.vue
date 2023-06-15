<template>
    <div class="p-20">
        <Card class="animate__animated animate__fadeIn">
            <template #title>
                <h4 class="text-main-color text-center">Administración</h4>
            </template>
            <template #content>
                <TabView class="tabview-custom">
                    <TabPanel>
                        <template #header>
                            <i class="pi pi-file mr-2"></i>
                            <span>Formularios</span>
                        </template>
                        <FormSetting @changeActive="activeForm"></FormSetting>

                    </TabPanel>
                    <TabPanel>
                        <template #header>
                            <i class="pi pi-file mr-2"></i>
                            <span>Solicitudes</span>
                        </template>
                        <ApplicationSetting></ApplicationSetting>

                    </TabPanel>
                </TabView>
            </template>
            <template #footer>
            </template>
        </Card>
    </div>
    
</template>

<script setup>


useHead({
    title: 'Ajustes'
})
</script>