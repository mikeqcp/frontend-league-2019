using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallBounce : MonoBehaviour
{
    [SerializeField] private float speed = 1.0f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    void Awake()
    {

    }

    // Update is called once per frame
    void Update()
    {
        transform.position = new Vector3(transform.position.x, Mathf.Sin(Time.time * speed), transform.position.z); 
        //Time.deltaTime;
    }

    void FixedUpdate()
    {
        // tutaj fizyka
    }

    void LateUpdate()
    {
        // Kamera
    }
}
