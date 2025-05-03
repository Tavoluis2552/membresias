<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Gustavo Siancas',
            'username' => 'gustavo25',
            'email' => 'gustavo@gmail.com',
            'photo' => 'foto.jpg',
            'password' => Hash::make('password'),
        ]);
        User::create([
            'name' => 'Junior Martinez',
            'username' => 'junior15',
            'email' => 'junior@gmail.com',
            'photo' => 'foto2.jpg',
            'password' => Hash::make('password'),
        ]);
    }
}
