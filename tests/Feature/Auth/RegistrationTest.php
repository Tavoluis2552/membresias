<?php

namespace Tests\Feature\Auth;

use App\Models\Local;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_can_be_rendered()
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }

    public function test_new_users_can_register()
    {
        $local = Local::factory()->create();
        $response = $this->post('/register', [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'username' => 'testuser',
            'photo' => 'https://example.com/photo.jpg',
            'local_id' => $local->id,
            'password' => 'password',
            'password_confirmation' => 'password',
            'status' => true,
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(route('dashboard', absolute: false));
    }
}
