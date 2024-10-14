<template>
    <div>
        <RouterView></RouterView>
        <h1>Manager User</h1>
        <div v-if="isShowAdd">
            <AddUser :updateUserList="updateUserList" @closeForm="stopAdd" @userAdded="updateUserList" />
        </div>
        <div v-else>
            <button class="add" @click="addNewUser">Add new user</button>
        </div>
        <button @click="resert">Reset</button>
        <input type="text" placeholder="Tìm kiếm theo tên và email" v-model="searchQuery" />
        <button @click="search">Tìm kiếm</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Sex</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in filteredUsers" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.dateOfBirth }}</td>
                    <td>{{ item.selectedGender }}</td>
                    <td>{{ item.email }}</td>
                    <td>
                        <button @click="editUser(item.id)" class="edit">Edit</button>
                        <button @click="confirmDelete(index)" class="delete">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AddUser from '@/views/AddUser.vue';
const router = useRouter();
const allUsers = ref([]);
const isShowAdd = ref(false);
const searchQuery = ref('');

const updateUserList = () => {
    const usersData = localStorage.getItem('users');
    if (usersData) {
        try {
            allUsers.value = JSON.parse(usersData);
        } catch (error) {
            console.error('Failed to parse users:', error);
        }
    }
};



onMounted(updateUserList);

const addNewUser = () => {
    isShowAdd.value = true;
};

const stopAdd = () => {
    isShowAdd.value = false;
};

const resert = () => {
    searchQuery.value = '';
};

const filteredUsers = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return allUsers.value.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
});

const editUser = (id) => {
    router.push(`/admin/manager-user/edit/${id}`);
};

const confirmDelete = (index) => {
    if (confirm('Bạn chắc chắn muốn xóa người dùng này?')) {
        deleteUser(index);
    }
};

const deleteUser = (index) => {
    allUsers.value.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(allUsers.value));
};
</script>


<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

.add {
    color: aliceblue;
    background: blue;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.edit {
    color: aliceblue;
    background: green;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.delete {
    color: aliceblue;
    background: red;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.stop {
    margin-left: 465px;
    color: white;
    background: red;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 400px;
}

.stop:hover {
    background-color: darkred;
}
</style>
