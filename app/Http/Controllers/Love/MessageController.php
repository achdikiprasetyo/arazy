<?php

namespace App\Http\Controllers\Love;

use App\Http\Controllers\Controller;
use App\Models\Love\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;



class MessageController extends Controller
{

    public function index()
    {
        $messages = Message::all();  // Ambil data pesan dari database
        return Inertia::render('Heart/RomanticFloatSpace', [
            'messages' => $messages,  // Kirim data ke frontend
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'text' => 'required|string|max:1000',
        ]);

        Message::create([
            'text' => $request->text,
            'type' => 'sent',  // misal: 'sent' atau 'received'
            'is_read' => false,
            'date' => now(),
        ]);

        return redirect()->back();
    }

    public function markAsRead($id)
    {
        $message = Message::findOrFail($id);
        $message->update(['is_read' => true]);
    
        return redirect()->back(); 
        
    }
}
