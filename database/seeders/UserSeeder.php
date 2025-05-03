<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //get the roles
        $adminRole = Role::findById(1);
        $personalRole = Role::findById(2);


        // get the permissions 
        $permissions = Permission::all()->pluck('name')->toArray();


        $admin_1 = User::create([
            'name' => 'Gustavo Siancas',
            'username' => 'gustavo25',
            'email' => 'gustavo@gmail.com',
            'local_id' => 1,
            'photo' => 'foto.jpg',
            'password' => Hash::make('password'),
        ]);
        $admin_2 = User::create([
            'name' => 'Junior Martinez',
            'username' => 'junior15',
            'email' => 'junior@gmail.com',
            'local_id' => 1,
            'photo' => 'foto2.jpg',
            'password' => Hash::make('password'),
        ]);

        $adminRole->syncPermissions($permissions);
        $admin_1->assignRole($adminRole);
        $admin_2->assignRole($adminRole);
    }
}
