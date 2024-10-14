<template>
    <div>
        <div class="navbar">
            <div><router-link to="/admin" class="no-border">Dashboard</router-link></div>
            <div><router-link to="/admin/manager-user" class="no-border">Manager User</router-link></div>
            <div><router-link to="/admin/manager-product" class="no-border">Manager Product</router-link></div>
        </div>
        <RouterView></RouterView>

    </div>
</template>
<script setup>
</script>

<style>
.no-border {
    border: none;
    text-decoration: none;
    color: inherit;
    font-size: x-large;
}

.navbar {
    display: flex;
    flex-direction: row;
    gap: 30px;
    background-color: black;
    color: aliceblue;
    padding: 10px;

}

.navbar div {
    padding: 5px;
}
</style>
