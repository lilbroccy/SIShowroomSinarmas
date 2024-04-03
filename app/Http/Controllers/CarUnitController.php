<?php

namespace App\Http\Controllers;

use App\Models\CarUnit;
use Illuminate\Http\Request;

class CarUnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $carUnits = CarUnit::all();
        return view('index', compact('carUnits'));
    }

    public function show($id)
    {
        $carUnit = CarUnit::findOrFail($id);
        return view('show', compact('carUnit'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('car_units.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validasi data yang masuk
        $request->validate([
            'name' => 'required',
            // Tambahkan validasi untuk atribut lainnya sesuai kebutuhan
        ]);

        // Simpan data baru ke dalam tabel
        CarUnit::create($request->all());

        // Redirect kembali ke halaman index dengan pesan sukses
        return redirect()->route('car_units.index')
            ->with('success', 'Car Unit created successfully.');
    }

    // Metode lainnya seperti edit, update, destroy, dll.
}
